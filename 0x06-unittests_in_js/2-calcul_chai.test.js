const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');
import calculateNumber from './2-calcul_chai.js'
describe('calculateNumber', function () {
  it("calculateNumber should return 5 when 'SUM', 2 and 2.6 are passed", function () {
    const result = calculateNumber('SUM', 2, 2.6);
    expect(result).to.equal(5);
  });
  it("calculateNumber should return 0 when 'SUBTRACT', 2.5 and 2.5 are passed", function () {
    const result = calculateNumber('SUBTRACT', 2.5, 2.5);
    expect(result).to.equal(0);
  });
  it("calculateNumber should return 4 when 'DIVIDE', 8 and 1.5 are passed", function () {
    const result = calculateNumber('DIVIDE', 8, 1.5);
    expect(result).to.equal(4);
  });
  it("calculateNumber should return Error when 'DIVIDE', 5 and 0.4 are passed", function () {
    const result = calculateNumber('DIVIDE', 5, 0.4);
    expect(result).to.equal('Error');
  });
});
