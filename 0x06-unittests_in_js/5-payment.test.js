const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
    let consoleSpy;

    beforeEach(function () {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        consoleSpy.restore();
    });

    it('should log "The total is: 120" and call console once', function () {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });

    it('should log "The total is: 20" and only call console once', function () {
        sendPaymentRequestToApi(10, 10);
        chai.expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
        chai.expect(consoleSpy.calledOnce).to.be.true;
    });
});
