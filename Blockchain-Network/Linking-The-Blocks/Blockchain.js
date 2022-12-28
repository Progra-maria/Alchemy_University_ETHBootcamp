const Block = require('./Block');


class Blockchain {
        constructor() {
            const genesisBlock = new Block("First Block");
            genesisBlock.previousHash = 0;
            this.chain = [ genesisBlock ];
    
        }

//Puts a given block to the blockchain and links it with his previous block
addBlock = function(block){
    console.log("Longitud de la cadena:",this.chain.length)
    if (this.chain.length == 0){
        this.chain[0] = block;
        this.chain[0].previousHash = 0;
        console.log("este es el nuevo primer bloque", this.chain[0]);
    }else {
        block.previousHash = this.chain[this.chain.length - 1].toHash();
    }
    console.log("cadena:",this.chain);
    
    this.chain.push(block);
    console.log("bloque:",this.chain[1]);
}

//This function returns true or false if a block is valid or invalid respectively
isValid = function(chain){
    console.log("Desde isValid:", this.chain);
    if (this.chain[0].previousHash.toString() != 0){
        return false;
    }
    let i;
    for (i = 1; i < this.chain.length; i++)
    if (this.chain[i].previousHash.toString() != this.chain[i - 1].toHash().toString()){
        return false;
    }
    return true;
}
};

module.exports = Blockchain;
