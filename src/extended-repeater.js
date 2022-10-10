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
function repeater( str, options ) {
  let result = [];
  let temp = str;
  if (typeof str != "string") {
    temp = String(str);
  }
  let repit = options.repeatTimes === undefined ? 1 : options.repeatTimes;
  let sep = options.separator === undefined ? "+" : options.separator;
  let add = options.addition === undefined ? "" : String(options.addition);
  let addRepit =
    options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
  let addSep =
    options.additionSeparator === undefined ? "|" : options.additionSeparator;

  if (add) {
    let arr = [];

    for (let i = 0; i < addRepit; i++) {
      arr.push(add);
    }
    temp += arr.join(addSep);
  }

  for (let i = 0; i < repit; i++) {
    result.push(temp);
  }
  return result.join(sep);

}

module.exports = {
  repeater
};
