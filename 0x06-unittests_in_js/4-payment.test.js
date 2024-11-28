const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
    it('should stub Utils.calculateNumber and check behavior', function () {
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const logSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(logSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

        stub.restore();
        logSpy.restore();
    });
});
