const request = require('request');
const { expect } = require('chai');


describe('Login endpoint', () => {
    it('should return correct message for POST /login', (done) => {
        const options = {
            url: 'http://localhost:7865/login',
            method: 'POST',
            json: true,
            body: { userName: 'Betty' }
        };

        request(options, (_error, _response, body) => {
            expect(body).to.equal('Welcome Betty');
            done();
        });
    });
});

describe('Available Payments endpoint', () => {
    it('should return correct payment methods for GET /available_payments', (done) => {
        request.get('http://localhost:7865/available_payments', (_error, _response, body) => {
            const expectedPaymentMethods = {
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            };
            expect(JSON.parse(body)).to.deep.equal(expectedPaymentMethods);
            done();
        });
    });
});


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