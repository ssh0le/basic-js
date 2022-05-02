const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  }

  isLetter(char) {
    return char.toLowerCase() != char.toUpperCase()
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined || arguments.length === 0) {
      throw new Error('Incorrect arguments!');
    }
    let res = [];
    let m, k, ki = 0;
    for (let i = 0; i < message.length; i++) {
      if (!this.isLetter(message[i])) {
        res.push(message[i]);
        continue;
      }
      m = this.alphabet.indexOf(message[i].toUpperCase())
      let curKeyLetter = key[ki++ % key.length];
      k = this.alphabet.indexOf(curKeyLetter.toUpperCase());
      let alphabetIndex = m + k;
      if (alphabetIndex > this.alphabet.length) {
        alphabetIndex -= this.alphabet.length;
      }
      console.log(alphabetIndex, message[i], curKeyLetter);
      res.push(this.alphabet[alphabetIndex % this.alphabet.length]);
    }
    if (this.direct) {
      return res.join('');
    }
    else {
      return res.reverse().join('');
    }
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined || arguments.length === 0) {
      throw new Error('Incorrect arguments!');
    }
    let m, k, ki = 0;
    let res = [];
    for (let i = 0; i < message.length; i++) {
      if (!this.isLetter(message[i])) {
        res.push(message[i]);
        continue;
      }
      m = this.alphabet.indexOf(message[i].toUpperCase())
      let curKeyLetter = key[ki++ % key.length];
      k = this.alphabet.indexOf(curKeyLetter.toUpperCase());
      let alphabetIndex = m - k;
      if (alphabetIndex < 0) {
        alphabetIndex += this.alphabet.length;
      }
      res.push(this.alphabet[alphabetIndex % this.alphabet.length]);
    }
    if (this.direct) {
      return res.join('');
    }
    else {
      return res.reverse().join('');
    }
  }
}
let mach = new VigenereCipheringMachine();
console.log(mach.encrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'z'))

module.exports = {
  VigenereCipheringMachine
};
