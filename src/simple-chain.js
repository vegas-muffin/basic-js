      const CustomError = require("../extensions/custom-error");
      const chainMaker =  {
         mainChain: [],
         getLength() {
           return this.mainChain.length; 
         },
         addLink(value) {
               if(value==null)
             this.mainChain.push("( null )");
                     else
           this.mainChain.push("( "+value+" )");
               return this;
         },
         removeLink(position) {
               if(typeof position!=="number"||isNaN(position)||!Number.isInteger(position)||position>this.mainChain.length||position<1){
                     this.mainChain.splice(0,this.mainChain.length);
           throw new Error('Error!!!');
               }
               else
        this.mainChain.splice(parseInt(position)-1,1);
               return this;
         },
         reverseChain() {
               this.mainChain.reverse();
               return this;
         },
         finishChain() {        
         let chain=this.mainChain.join("~~");
               this.mainChain.splice(0,this.mainChain.length);
           return chain;
         }
       };

      module.exports = chainMaker;
