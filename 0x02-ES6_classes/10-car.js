export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string' || typeof motor !== 'string' || typeof color !== 'string') {
      throw new Error('Invalid types');
    }

    this._brand = brand;
    this._motor = motor;
    this._color = color;

    Object.defineProperties(this, {
      brand: {
        get() {
          return this._brand;
        },
      },
      motor: {
        get() {
          return this._motor;
        },
      },
      color: {
        get() {
          return this._color;
        },
      },
    });
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
