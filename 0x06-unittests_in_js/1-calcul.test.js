const assert = require('assert');
const calculateNumber = require('./1-calcul')

describe('calculateNumber', function () {
  it("calculateNumber should return 5 when 'SUM', 2 and 2.6 are passed", function () {
    const result = calculateNumber('SUM', 2, 2.6);
    assert.strictEqual(result, 5);
  });
  it("calculateNumber should return 0 when 'SUBTRACT', 2.5 and 2.5 are passed", function () {
    const result = calculateNumber('SUBTRACT', 2.5, 2.5);
    assert.strictEqual(result, 0);
  });
  it("calculateNumber should return 4 when 'DIVIDE', 8 and 1.5 are passed", function () {
    const result = calculateNumber('DIVIDE', 8, 1.5);
    assert.strictEqual(result, 4);
  });
  it("calculateNumber should return Error when 'DIVIDE', 5 and 0.4 are passed", function () {
    const result = calculateNumber('DIVIDE', 5, 0.4);
    assert.strictEqual(result, 'Error');
  });
});
