export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Input must be a number');
    } else {
      this._sqft = sqft;
    }

    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set(value) {
    if (typeof value !== 'number') {
      throw new TypeError('value must be a number');
    } else {
      this._sqft = value;
    }
  }
}
