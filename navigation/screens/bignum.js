const BN = require('bn.js');

var b = new BN(String(100000000000000000), 10);

console.log("0x" + b.toString(16))

