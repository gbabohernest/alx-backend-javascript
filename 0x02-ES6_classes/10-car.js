export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string' || typeof motor !== 'string' || typeof color !== 'string') {
      throw new Error('Invalid types');
    }

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const newCar = new this.constructor(this._brand, this._motor, this._color);
    Object.setPrototypeOf(newCar, Object.getPrototypeOf(this));
    return newCar;
  }
}
