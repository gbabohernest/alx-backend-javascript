export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') {
      throw new Error('Invalid values');
    }
    this._size = size;
    this._location = location;

    // Getter for attributes
    Object.defineProperties(this, {
      size: {
        get() {
          return this._size;
        },
      },
      location: {
        get() {
          return this._location;
        },
      },
    });
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
