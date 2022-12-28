const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    //Adds Transaction to the blockchain
    mempool.push(transaction);
}

function mine() {
    //Creates the Block Object and the id property
    function Block(id) {
        this.id = id;
    }

    //Sets the id and puts the block into blocks array
    block = new Block(blocks.length);

    //Adds the transaction property to Block object
    function Block(id, transactions) {
        this.id = id;
        this.transactions = transactions;
    }

    //pull transactions off the mempool and include them in the block in
    // an array called transactions
    block.transactions = mempool.splice(0, MAX_TRANSACTIONS);
    
    //Add a nonce property
    function Block(id, transactions, nonce) {
        this.id = id;
        this.transactions = transactions;
        this.nonce = nonce;
    }

    //Set noce to 0
    block.nonce = 0;

    //Adds the hash property to the Block Object
    function Block(id, transactions, nonce, hash) {
        this.id = id;
        this.transactions = transactions;
        this.nonce = nonce;
        this.hash = hash;
    }

    //Stringifies the block and hashes the block content
    hashBlock = SHA256(JSON.stringify(block));

    //Keep changing the nonce until you find a hash that is less 
    //than the TARGET_DIFFICULTY
    while (BigInt(`0x${hashBlock}`) >= TARGET_DIFFICULTY){
        block.nonce++;
        hashBlock = SHA256(JSON.stringify(block));
    }

    //Sets the hash on hash property
    block.hash = hashBlock;

    //puts the block into the chain
    blocks.push(block);
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    blocks,
    mempool
};
