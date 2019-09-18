class Calculator {
  constructor() {
    this.storeResult = [];
  }
  add() {
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
      result += parseFloat(arguments[i]);
      this.last = result;
    }
    return result;
  }

  multiply() {
    let result = 1;

    for (let i = 0; i < arguments.length; i++) {
      result *= parseFloat(arguments[i]);
      this.last = result;
    }
    return result;
  }

  getLast() {
    return this.last;
  }
  setSlot(i) {
    this.storeResult.push(this.last);
    return this.storeResult[i - 1];
  }

  getSlot(i) {
    return this.storeResult[i - 1];
  }
}
