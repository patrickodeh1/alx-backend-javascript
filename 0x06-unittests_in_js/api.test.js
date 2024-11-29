const chai = require('chai');
const chaiHttp = require('chai-http');
const {expect} = chai;
const app = require('./api');
const server = app.listen(7865);

chai.use(chaiHttp);

describe('Index Page', function () {
    it('should return the correct status code', function (done) {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
    it('should return the correct result', function () {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res.text).to.equal('Welcome to the payment system');
                done();
            });
    });
    it('should not have an error', function (done) {
        chai.request(app)
            .get('/')
            .end((err) => {
                expect(err).to.be.null;
                done();
            });
    });
});

after(function (done) {
    server.close(done);
  });
