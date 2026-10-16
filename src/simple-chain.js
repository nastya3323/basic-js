const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(...args) {
    let str = '';

    if (args.length) {
      str = String(args[0]);
    }

    this.chain.push(`( ${str} )`);
    return this;
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.getLength()
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain;
    this.chain = [];

    return result.join('~~');
  },
};

module.exports = {
  chainMaker,
};
