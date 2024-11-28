const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
    it('should call calculateNumber with SUM and the correct arguments', function () {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith('SUM', 100, 20)).to.be.true;
        spy.restore();
    });
    it('should print the correct result', function () {
        const logSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        expect(logSpy.calledOnce).to.be.true;
        expect(logSpy.calledWith('The total is: 120')).to.be.true;

        logSpy.restore();
    });
});
