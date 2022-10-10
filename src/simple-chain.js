const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: [],

    getLength() {
      return this.chain.length;
    },
    addLink(value = " ") {
      let str = String(value);
      this.chain.push(`( ${str} )`);
      return this;
    },
    removeLink(position) {
      try {
        if (
          typeof position != "number" ||
          position < 1 ||
          position > this.chain.length ||
          Math.floor(position) != position
        ) {
          this.chain = [];
          throw new Error(`You can't remove incorrect link!`);
        }
        let tempArr = [];
        this.chain[position - 1] = "";
        this.chain.forEach((item) => {
          if (item) {
            tempArr.push(item);
          }
        });
        this.chain = tempArr;
        return this;
      } catch (e) {
        throw e;
      }
    },
    reverseChain() {
      this.chain.reverse();
      return this;
    },
    finishChain() {
      let str = this.chain.join("~~");
      this.chain = [];
      return str;
    },
};

module.exports = {
  chainMaker
};
