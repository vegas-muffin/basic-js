      const CustomError = require("../extensions/custom-error");

      const chainMaker = {
        mainChain: [],

        getLength() {
          return this.mainChain.length;
        },
        addLink(value) {
          if (value === undefined) {
            this.mainChain.push(" ");
          } else if (value === null) {
            this.mainChain.push("null");
          } else {
            this.mainChain.push(value.toString());
          }
          return this;
        },
        removeLink(position) {
          if (position <= 0 || position > this.mainChain.length) {
            this.mainChain = [];
            throw new Error();
          }
          this.mainChain.splice(position - 1, 1);
          return this;
        },
        reverseChain() {
          this.mainChain = this.chain.reverse();
          return this;
        },
        finishChain() {
          let chained = this.mainChain.map((value) => `( ${value} )`);
          this.mainChain = [];
          return chained.join("~~");
        },
      };

      module.exports = chainMaker;
