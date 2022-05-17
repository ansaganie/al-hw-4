let concat = '';
let joint = '';

function concatStrings(str, separator) {
  joint = separator || joint;

  const shouldFinish = typeof str !== 'string' || str === undefined || str === null;
  const hasSeparator = concat && joint && str;

  if (shouldFinish) {
    const result = `${concat}`;

    concat = '';
    joint = '';

    return result;
  }

  if (hasSeparator) {
    concat = `${concat}${joint}`;
  }

  concat = `${concat}${str}`;

  return concatStrings;
}

class Calculator {
  #x;
  #y;

  constructor(x, y) {
    if (x === undefined || y === undefined) {
      throw new Error('Constructor must have two arguments type of number');
    }

    Calculator.validateNumbers(x, y);

    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
    this.logSum = this.logSum.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logDiv = this.logDiv.bind(this);

    this.#x = x;
    this.#y = y;
  }

  setX(num) {
    Calculator.validateNumbers(num);

    this.#x = num;
  }

  setY(num) {
    Calculator.validateNumbers(num);

    this.#y = num;
  }

  logSum() {
    console.log(this.#x + this.#y);
  }

  logMul() {
    console.log(this.#x * this.#y);
  }
  logSub() {
    console.log(this.#x - this.#y);
  }

  logDiv() {
    if (this.#y === 0) {
      throw new Error('Number can not be divided by zero')
    }

    console.log(this.#x / this.#y);
  }

  static validateNumbers(...numbers) {
    const isValid = numbers.every((num) => typeof num === 'number' && isFinite(num));

    if (!isValid) {
      throw new TypeError('Argument isn\'t type of number');
    }
  }
}
