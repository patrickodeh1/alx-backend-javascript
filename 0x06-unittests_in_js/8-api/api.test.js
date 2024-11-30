const chai = require('chai');
const request = require('request');
const {expect} = chai;
const app = require('./api');
let server;

before(function (done) {
    server = app.listen(7865, () => {
        done();
    });
});

describe('Index Page', function () {
    it('should return the correct status code', function (done) {
        request.get('http://localhost:7865/', function (err, res) {
            expect(res.statusCode).to.equal(200); // Check status code
            done();
        });
    });

    it('should return the correct result', function (done) {
        request.get('http://localhost:7865/', function (err, res, body) {
            expect(body).to.equal('Welcome to the payment system'); // Check response body
            done();
        });
    });
    it('should not have an error', function (done) {
        request.get('http://localhost:7865/', function (err) {
            expect(err).to.be.null; // Ensure no error occurred
            done();
        });
    });
});

after(function (done) {
    server.close(done);
  });
