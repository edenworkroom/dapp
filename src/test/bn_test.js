const BigNumber = require('bignumber.js');

var a = new BigNumber(12.5, 10);

console.log(a.multipliedBy(new BigNumber(1000)).toString(10))