require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remember solid hockey arch orange strong'; 
let testAccounts = [
"0x581b3441be896ea30f6358d9ffda845610ad159906b6a60182588353a1510632",
"0xb82fa33a4fe04edeef496e402a935ec44dc1e854aa78529ca20605f4aa905587",
"0x47142215e6bfb5855cd6ef047e64a8f55a9c6074fae9a396690fe02e8053f68c",
"0xbf21c6ac99bd6ed24d7876e9eff8fa311f3b96c0fa0597640f2b06f76eeb42ce",
"0x11d90b0eb17b32a3236c4eaec162b88ad46f8120340aabae4114f18d405997b9",
"0xc20418ce6c2930799391b758fafa244543b9d5409c117f2d8e1718717d13de5c",
"0x4449ea066002c809a68b2bd850114691dd0b09cfe4ac635b10c2c1dde614aa4a",
"0xfb7957424cf750591fa43d07825607347ab0484b0d2548499bf85c5ab2532b46",
"0xe759fc3b8f5629d8ce5865d3e46a2e6ad6cffa42ca2bc43a835321c18c1dfedd",
"0x9d04e9e02aa1fb8f444064ef297d0dafcc57d17d91d5c1481171c03a01ca8cbe"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


