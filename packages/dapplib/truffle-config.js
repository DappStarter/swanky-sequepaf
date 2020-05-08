require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name rifle noise concert grace loan flower gentle'; 
let testAccounts = [
"0xeff9eddca959b4355bd6f84a5916064a959f0ed6de4efce142eed937b1de5136",
"0x6397e1ae8f945eba1ec897018d9791716ac2bf6d8f087650bb54e1c2fe3cf5d7",
"0x21b59c9ad1cc4a2c92d06f3b45842797593aa40a1252f492fba9ae60fa601de0",
"0xe214a7244d9a0ecacd4041f0113f546502130d343f4c8336d09e3f11e23e65d0",
"0x1b5a755a34677cf945daa150347a8d888956adfa19dea028b52c9ff899bc02c8",
"0xe934bda1b1250b3f71dbce6d686ba64f092e6f6eef67f0526ef13d80e79a564c",
"0xf887760f6cd0671f92e9e380cae6a519f03074d400ed352b2f5c820f8f7a6e00",
"0xfd956c59efc0c220f2564a83f6a4c9ff30a20c10a672786ccbba5c5df9a964e1",
"0xbca2c60ab9e0971bb3f271e454215520e3287d863d333759b2e94e944893a657",
"0x0d5599622eb143ce775febece336c18466bbb013b0862d6c0f282bb687aa6b71"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
