/* eslint-disable no-unused-vars */
const request = require('request');
const { expect } = require('chai');
// const server = require('./api');

describe('Index page', () => {
  it('should return correct status code', () => (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      done();
    });
  });

  it('should return correct result', () => (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
