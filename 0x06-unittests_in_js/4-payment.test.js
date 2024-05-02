const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use stub for Utils.calculateNumber and log the correct message.', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberStub.callCount).to.be.equal(1);
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
    expect(consoleLogSpy.callCount).to.be.equal(1);

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
