const request = require('request');
const { expect } = require('chai');
const server = require('./api');

describe('index page', () => {
  it('should return correct status code', () => new Promise((done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('should return correct result', () => new Promise((done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});
