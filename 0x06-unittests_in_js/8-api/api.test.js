const chai = require('chai');
const request = require('request');
const { expect } = chai;

const app = require('./api');
let server;

describe('Index Page', function () {
    before(function (done) {
        server = app.listen(7865, () => done());
    });

    after(function (done) {
        server.close(done);
    });

    it('should return the correct status code', function (done) {
        request('http://localhost:7865', function (err, res) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct result', function (done) {
        request('http://localhost:7865', function (err, res, body) {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });

    it('should not have an error', function (done) {
        request('http://localhost:7865', function (err) {
            expect(err).to.be.null;
            done();
        });
    });
});
