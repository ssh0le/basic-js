const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
  let times = options.repeatTimes == undefined ? 1 : options.repeatTimes;
  let aTimes = options.additionRepeatTimes == undefined ? 1 : options.additionRepeatTimes;
  let add = options.addition === undefined ? '' : options.addition === null ? 'null' : options.addition;
  let sep = options.separator == undefined ? '+' : options.separator;
  let addSep = options.additionSeparator == undefined ? '|' : options.additionSeparator;
  for (let i = 1; i <= times; i++) {
    res += str;
    for (let j = 1; j <= aTimes; j++) {
      res += add;
      res += ((j == aTimes) ? '' : addSep);
    }
    res += i == times ? '' : sep;
  }
  return res;
}

module.exports = {
  repeater
};
