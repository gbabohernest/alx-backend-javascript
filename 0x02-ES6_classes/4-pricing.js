import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    // perform some checks on the values passed when instantiating the class
    if (typeof amount !== 'number' || !(currency instanceof Currency)) {
      throw new Error('Values are invalid');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (value !== 'number') {
      throw new Error('Amount must be a number');
    }
    this._amount = value;
    return value;
  }

  get currency() {
    return this._currency;
  }

  set currency(objValue) {
    if (!(objValue instanceof Currency)) {
      throw new Error('currency must be an instance of Currency');
    }
    this._currency = objValue;
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static covertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }

    return null;
  }
}
