const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe('calculateNumber', function () {
  it("calculateNumber should return 5 when 2 and 2.6 are passed", function () {
    assert.equal(calculateNumber(2, 2.6), '5');
  });
});
