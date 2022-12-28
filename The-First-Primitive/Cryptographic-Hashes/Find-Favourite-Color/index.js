const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    let i = 0;
    
    for (i = 0; i <= 5; i++){
        let colorBytes = utf8ToBytes(COLORS[i]);
        let colorHash = sha256(colorBytes);
    if (toHex(hash) === toHex(colorHash)){
        console.log()
        return COLORS[i];
        }
    }
}

module.exports = findColor;
