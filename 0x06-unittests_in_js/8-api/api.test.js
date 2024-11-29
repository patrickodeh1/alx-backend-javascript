const chai = require('chai');
const fetch = require('node-fetch');
const {expect} = chai;
const app = require('./api');
let server;
before(function () {
    server = app.listen(7865);
  });

describe('Index Page', function () {
    it('should return the correct status code', async function () {
        const res = await fetch('http://localhost:7865/');
        expect(res.status).to.equal(200);
    });
    it('should return the correct result', async function () {
        const res = await fetch('http://localhost:7865/');
        const text = await res.text();
        expect(text).to.equal('Welcome to the payment system');
    });

    it('should not have an error', async function () {
        const res = await fetch('http://localhost:7865/');
        expect(res.ok).to.be.true; // Check if the response was successful
    });
});

after(function (done) {
    server.close(done);
});