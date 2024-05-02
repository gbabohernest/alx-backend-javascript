const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('should return correct status code', () => (done) => {
    request.get(`http://localhost:7865/`, (_error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

});
