const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    const recoveredKey = await secp.recoverPublicKey(hashMessage(message), signature, recoveryBit);
    
    return recoveredKey;
}

module.exports = recoverKey;
