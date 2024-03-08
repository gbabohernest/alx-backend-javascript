/* eslint-disable no-underscore-dangle, class-methods-use-this */
export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = sqft;

    // create getter & setter for this property
    Object.defineProperty(this, 'sqft', {
      get() {
        return this._sqft;
      },
    });
  }

  // abstract method
  evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage',
    );
  }
}
