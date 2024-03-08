import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') {
      throw new Error('wrong type');
    }
    this._floors = floors;

    // Getter for floors attribute
    Object.defineProperty(this, 'floors', {
      get() {
        return this._floors;
      },
    });
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
