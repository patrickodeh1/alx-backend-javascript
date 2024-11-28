const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe('calculateNumber', function () {
  it("calculateNumber should return 5 when 2 and 2.6 are passed", function () {
    assert.strictEqual(calculateNumber(2, 2.6), 5);
  });
  it("calculateNumber should return 5 when 2.5 and 2.4 are passed", function () {
    assert.strictEqual(calculateNumber(2.5, 2.4), 5);
  });
  it("calculateNumber should return 0 when 0 and 0.3 are passed", function () {
    assert.strictEqual(calculateNumber(0.3, 0.3), 0);
  });
  it("calculateNumber should return -4 when -2 and -2.4 are passed", function () {
    assert.strictEqual(calculateNumber(-2, -2.4), -4);
  });
});
