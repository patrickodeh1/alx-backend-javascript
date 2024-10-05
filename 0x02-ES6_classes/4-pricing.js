import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number' && amount > 0) {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number and greater than 0');
    }
    if (!(currency instanceof (Currency))) {
      throw new TypeError('currency must be instance of Currency class');
    } else {
      this._currency = currency;
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof (Currency))) {
      throw new TypeError('currency must be instance of Currency class');
    } else {
      this._currency = value;
    }
  }

  displayFullPrice() {
    return (`${this.amount} ${this.currency.displayFullCurrency()}`);
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
