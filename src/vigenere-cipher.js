const { NotImplementedError } = require("../extensions/index.js");

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
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  type = true;
  constructor(type = true) {
    this.type = type;
  }
  encrypt(s, k) {
    try {
      if (!s || !k) {
        throw new Error("Incorrect arguments!")
      }
      let i = 0,
      j = 0,
      key = k.toUpperCase(),
      result = "";
    let str = s.toUpperCase();
    for (i; i < str.length; i++) {
      let indexStr = this.alphabet.indexOf(str[i]);
      if (indexStr === -1) {
        result += str[i];
      } else {
        let indexKey = this.alphabet.indexOf(key[j]);
        let letter =
          this.alphabet[
            ((this.alphabet.length + (indexStr + indexKey)) % this.alphabet.length)
          ];
        result += letter;
        j++;
        j = j >= key.length ? j % key.length : j;
      }
    }
    return this.type ? result : result.split('').reverse().join('');
    } catch(e) {
      throw (e);
    }
    
  }
  decrypt(s, k) {
    try {
    if (!s || !k) {
      throw new Error("Incorrect arguments!");
    } 
    let i = 0,
    j = 0,
    key = k.toUpperCase(),
    result = "",
    str = s.toUpperCase();
    // str = this.type ? s.toUpperCase() : s.toUpperCase().split('').reverse().join('');
    for (i; i < str.length; i++) {
      let indexStr = this.alphabet.indexOf(str[i]);
      if (indexStr === -1) {
        result += str[i];
      } else {
        let indexKey = this.alphabet.indexOf(key[j]);
        let letter =
          this.alphabet[
            ((this.alphabet.length + (indexStr - indexKey)) % this.alphabet.length)
          ];
        result += letter;
        j++;
        j = j >= key.length ? j % key.length : j;
      }
    }
    // return result;
    return this.type ? result : result.split('').reverse().join('');
    } catch(e) {
      throw e;
    }
 
  }
}

module.exports = {
  VigenereCipheringMachine,
};
