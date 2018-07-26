module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    ganacheUnitTest: {
      ref: 'ganache-unit-test',
      host: '127.0.0.1',
      port: 8545,
      gas: 7989556,
      gasPrice: 9000000000,
      network_id: '*'
    },
    gethUnitTest: {
      ref: 'geth-unit-test',
      host: '127.0.0.1',
      port: 8550,
      wsPort: 8551,
      gas: 7989556,
      gasPrice: 9000000000,
      network_id: '9999',
      passcode: {
        '0x727f09e28c2ffc752e0b0fb4b785d2d53793a9f0': 'fragments',
        '0x6120098ce7c3d62416ba38320e6fd89a8249f04e': 'fragments.org1',
        '0x5f783c5faf702bd6183020beb5bbf9d220725440': 'fragments.org2',
        '0xebf4a9ffaaccb312efebaab8edf16521746ec914': 'fragments.org3',
        '0x02a51ef950b80f717e2f260d35459bbcb75b8830': 'fragments.org4',
        '0xccf165f513c4208595158a1f0d615205e0003bff': 'fragments.org5',
        '0x6c0d88f4e9666ce46d536ca647250fc66b488875': 'fragments.org6',
        '0xb8715b7564a07c2fb42fc9654ae949f2923277dc': 'fragments.org7',
        '0xd57b21993b9d76e18cf5c54bedc0080d3d39d3ce': 'fragments.org8',
        '0x2a876a8c8e5f3d9f0e543cd026ba5308b7628ae6': 'fragments.org9'
      }
    }
  },
  mocha: {
    enableTimeouts: false
  }
};
