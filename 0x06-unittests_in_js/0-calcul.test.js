import { assert } from 'chai';
import calculateNumber from './0-calcul.js'

describe('calculateNumber', function () {
    it("calculateNumber should round floating number and return the sum", function () {
        assert.equal(calculateNumber(2, 2.6), '5');
    })
})