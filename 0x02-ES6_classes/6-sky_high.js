import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);

    if (typeof floors === 'number') {
      this._floors = floors;
    } else {
      throw new TypeError('floors must be a number');
    }
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof floors === 'number') {
      this._floors = value;
    } else {
      throw new TypeError('floors must be a number');
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
