/* global require */
/* eslint-disable object-curly-newline */

const { URL } = require('url');
const ttest = require('tape');

const { RHOCore, Hex, Ed25519keyPair } = require('..');

const testData = require('./RHOCoreSuite.json');

function testRHOCore() {
  const h2b = Hex.decode;

  function rtest(item) {
    return (test) => {
      test.deepEqual(RHOCore.fromJSData(item.data), item.rho);
      test.deepEqual(RHOCore.toJSData(item.rho), item.data);
      const msg = Par.fromObject(item.rho);
      test.deepEqual(RHOCore.toJSData(msg), item.data);
      if (item.rholang != null) {
        test.deepEqual(RHOCore.toRholang(item.rho), item.rholang);
      }
      test.deepEqual(RHOCore.toByteArray(item.rho).toString('hex'), item.hex);
      test.deepEqual(Par.encode(Par.decode(h2b(item.hex))), Par.encode(item.rho));

      test.end();
    };
  }

  function mapValues(obj, f) {
    return Object.entries(obj).reduce(
      (acc, [k, v]) => ({ [k]: f(v), ...acc }), {},
    );
  }

  const { rhol } = RHOCore;
  const rhoTests = {
    'rhol template: numbers, strings, lists, objects': (test) => {
      test.deepEqual(rhol`c1!(${['a']}, ${{ b: 2 }})`, 'c1!(["a"], {"b": 2})');
      test.end();
    },
    'rhol template: string quoting': (test) => {
      const txt = '"Hi," he said; "I\'m John."';
      test.deepEqual(rhol`c1!(${txt})`, 'c1!("\\"Hi,\\" he said; \\"I\'m John.\\"")');
      test.end();
    },
    'rhol template: begining': (test) => {
      test.deepEqual(rhol`${'a'}!(bc)`, '"a"!(bc)');
      test.end();
    },
    'rhol template: ending': (test) => {
      test.deepEqual(rhol`0!${'a'}`, '0!"a"');
      test.end();
    },
    'RHOCore extension: URI': (test) => {
      const uri = 'rho:id:wdwc36f4ixa6xacck3ddepmgueum7zueuczgthcqp6771kdu8jogm8';
      rtest({
        data: new URL(uri),
        rholang: `\`${uri}\``,
        hex: '2a3f223d72686f3a69643a776477633336663469786136786163636b33646465706d677565756d377a756575637a677468637170363737316b6475386a6f676d38',
        rho: { exprs: [{ g_uri: uri }] },
      })(test);
    },
    'rhol template: URL': (test) => {
      const uri = new URL('rho:id:wdwc36f4ixa6xacck3ddepmgueum7zueuczgthcqp6771kdu8jogm8');
      test.deepEqual(
        rhol`lookup!(${uri}, *return)`,
        'lookup!(`rho:id:wdwc36f4ixa6xacck3ddepmgueum7zueuczgthcqp6771kdu8jogm8`, *return)',
      );
      test.end();
    },
    'RHOCore extension: bytes': (test) => {
      const hex = 'deadbeef';
      rtest({
        data: h2b(hex),
        rholang: `"${hex}".hexToBytes()`,
        hex: '2a07ca0104deadbeef',
        rho: { exprs: [{ g_byte_array: h2b(hex) }] },
      })(test);
    },
    'RHOCore extension: private names': (test) => {
      const destid = h2b('476ec6197e7106e0f0c64fc4cc39e5439658f6b8540b95765496cfe01e92c6b4');
      const par = { unforgeables: [{ g_private_body: {id: destid} }] };
      rtest({
        rho: par,
        data: GUnforgeable.fromObject({
          g_private_body: GPrivate.fromObject({ id: destid })
        }),
        rholang: null,
        hex: '3a240a220a20476ec6197e7106e0f0c64fc4cc39e5439658f6b8540b95765496cfe01e92c6b4',
      })(test);
    },
    'BasicWallet transfer signature': (test) => {
      const destid = h2b('476ec6197e7106e0f0c64fc4cc39e5439658f6b8540b95765496cfe01e92c6b4');
      const k1 = Ed25519keyPair(h2b('f6664a95992958bbfeb7e6f50bbca2aa7bfd015aec79820caf362a3c874e9247'));

      // BasicWallet.transfer signature is over these params:
      const [nonce, amount, dest] = [12, 100, GUnforgeable.fromObject({
        g_private_body: GPrivate.fromObject({ id: destid })
      })];
      const sig = Hex.decode(RHOCore.wrapHash(k1.signBytes)([nonce, amount, dest]));
      test.equal(
        rhol`new dest, status in { BasicWallet!("transfer", ${amount}, ${nonce}, ${sig}, dest, status) }`,
        'new dest, status in { BasicWallet!("transfer", 100, 12, "eb490b2ff2ea49a3730db8a8a5b911da61b83e1bdb48e94f29985c36c065298667987a08515843b8b2edba4e5dd92f9e8adcc2ab115241b7e168063c8002cd02".hexToBytes(), dest, status) }',
      );
      test.end();
    },
  };

  Object.entries({ ...mapValues(testData, rtest), ...rhoTests })
    .forEach(([desc, fn]) => ttest(desc, fn));
}

testRHOCore();
