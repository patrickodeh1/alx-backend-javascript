export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string' && typeof name === 'string') {
      this._code = code;
      this._name = name;
    } else {
      throw new TypeError('inputs must be a string');
    }
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('code must be string');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('name must be string');
    }
  }

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }
}
