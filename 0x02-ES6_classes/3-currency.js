export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string' || typeof name !== 'string') {
      throw new Error('Values must a string');
    }
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('Code must a string');
    }
    this._code = value;
    return value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Name must a string');
    }
    this._name = value;
    return value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
