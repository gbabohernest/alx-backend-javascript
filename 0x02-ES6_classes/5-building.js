/* eslint-disable no-underscore-dangle, class-methods-use-this */
export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = sqft;

    // Check if constructor invoked with new keyword was not Building constructor
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }

    // create getter & setter for this property
    Object.defineProperty(this, 'sqft', {
      get() {
        return this._sqft;
      },
    });
  }
}
