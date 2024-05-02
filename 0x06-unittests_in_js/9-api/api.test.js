const request = require('request');
const { expect } = require('chai');

describe('Regex Integration testing', () => {

    it('should return correct status code when :id is a number', (done) => {
        request.get(`http://localhost:7865/`, (_error, response, body) => {
            expect(response.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });

    it('should return correct result when :id is a number', (done) => {
        request.get('http://localhost:7865/cart/123', (_error, response, body) => {
            expect(body).to.equal('Payment methods for cart 123');
            done();
        });
    });
   

    it('should return 404 status code when :id is negative number.', (done) => {
        request.get('http://localhost:7865/cart/-123', (_error, response, _body) => {
            expect(response.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return 404 status code when :id is NOT a number', (done) => {
        request.get('http://localhost:7865/cart/abc', (_error, response, _body) => {
            expect(response.statusCode).to.be.equal(404);
            done();
        });
    });
});