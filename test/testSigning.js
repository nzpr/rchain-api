/*global require*/
// @flow

const ttest = require('tape');
const { DeployData } = require('../protobuf/CasperMessage_pb').coop.rchain.casper.protocol;
const { Ed25519keyPair, RholangCrypto, Hex, REV } = require('..');

const { ed25519Verify } = RholangCrypto;

function testSigning() {
  const cases = {
    'RChain tutorial verify example':
    // https://developer.rchain.coop/tutorial/#verify
    check({
      seedHex: 'f6664a95992958bbfeb7e6f50bbca2aa7bfd015aec79820caf362a3c874e9247',
      pubKeyHex: '288755c48c3951f89c5f0ffe885088dc0970fd935bc12adfdd81f81bb63d6219',
      messageHex: 'a6da46a1dc7ed715d4cd6472a736249a4d11142d160dbef9f20ae493de908c4e',
      sigHex: 'd0a909078ce8b8706a641b07a0d4fe2108064813ce42009f108f89c2a3f4864aa1a510d6dfccad3b62cd610db0bfe82bcecb08d813997fa7df14972f56017e0b',
    }),
    'trust metric 2018-07-29T02:00:21.259Z':
    check({
      seedHex: '9217509f61d80a69627daad29796774d1b65d06e70762aa114e9aa534c0d76bb',
      pubKeyHex: '90685cf270025cddab375b3de595e9b87548c5f05f9e5bf17502d7cfcb7259f7',
      messageHex: '2abc02a201b8020a132a071a056d657267654a0800000000000000000a182a0c1a0a74727573745f636572744a0800000000000000000afc010a4d0a190a172a0b1a09636572745f74696d654a08000000000000000012262a1a1a18323031382d30372d32395430313a34343a34352e3132385a4a0800000000000000002a0800000000000000000a330a160a142a081a06726174696e674a080000000000000000120f2a031a01314a0800000000000000002a0800000000000000000a350a170a152a091a077375626a6563744a08000000000000000012102a041a0261314a0800000000000000002a0800000000000000000a350a150a132a071a05766f7465724a08000000000000000012122a061a0464636b634a0800000000000000002a0800000000000000004a0800000000000000001a0800000000000000004a080000000000000000',
      sigHex: '6018f96443adbe15ded23957b14be634b8708c80042fd6e9f882f75c3f227dc876d5f2026964483c3ee8b2913f7473d9f8827f32a0281eb1717af053f1f4c90e',
    }),
  };

  Object.entries(cases).forEach(([desc, fn]) => ttest(desc, fn));

  const b2h = Hex.encode;
  const h2b = Hex.decode;

  function check(info) {
    return (test) => {
      const pair1 = Ed25519keyPair(h2b(info.seedHex));

      test.deepEqual(info.pubKeyHex, pair1.publicKey());

      const message = h2b(info.messageHex);
      const sigHex = pair1.signBytesHex(message);
      test.deepEqual(info.sigHex, sigHex);

      test.deepEqual(ed25519Verify(message, h2b(info.sigHex), h2b(info.pubKeyHex)), true);
      test.end();
    };
  }

  ttest('sign deploy', (test) => {
    const defaultSec = h2b('b18e1d0045995ec3d010c387ccfeb984d783af8fbb0f40fa7db126d889f6dadd');

    const d0 /*: DeployData */ = {
      term: 'new test in { contract test(return) = { return!("test") } }',
      timestamp: 1554757703966,
      phloPrice: 1,
      phloLimit: 10000000,
    };
    const toSign = DeployData.encode(d0).finish();
    test.equal(
      b2h(toSign),
      '123b6e6577207465737420696e207b20636f6e747261637420746573742872657475726e29203d207b2072657475726e212822746573742229207d207d189eb29ff69f2d38014080ade204',
    );

    const dout = REV.SignDeployment.sign(Ed25519keyPair(defaultSec), d0);
    test.equal(
      b2h(dout.sig),
      'b6e0c2077e3ae2794b7324b518b49a9aa597eb07207f84f6339db73aeb6852491b8a7e640fd17f88ee80b61e3d326ec87835feebbb7dacdeadf03f26deff350f',
    );
    test.equal(
      b2h(dout.deployer),
      '77f48b59caeda77751ed138b0ec667ff50f8768c25d48309a8f386a2bad187fb',
    );
    test.end();
  });
}

testSigning();
