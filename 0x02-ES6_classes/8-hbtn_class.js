export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || Number.isNaN(size)) {
      throw new TypeError('class must be a number');
    } else {
      this._size = size;
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    } else {
      this._location = location;
    }
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }
}
