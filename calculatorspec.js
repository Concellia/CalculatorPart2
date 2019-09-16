describe("calculator", function() {
  let calculator;
  beforeEach(function() {
    calculator = new Calculator();
  });
  it("should return a zero, when passed 2 zeros", function() {
    expect(calculator.Add(0, 0)).toBe(0);
  });
  it("should return the sum of two negatives when passed in two negative numbers", function() {
    expect(calculator.Add(-2, -3)).toBe(-5);
  });
  it("should return the sum of two  positives when passes in two positive numbers", function() {
    expect(calculator.Add(10, 100)).toBe(110);
  });
  it("should return the sum of  as many numbers as passed in", function() {
    expect(calculator.Add(12, 23, 5, 15)).toBe(55);
  });
  it("should be able to add numbers with strings", function() {
    expect(calculator.Add("2", 2)).toBe(4);
  });
  it("should should multiply 2 numbers", function() {
    expect(calculator.Multiply(6, 3)).toBe(18);
  });
  it("should multiply multiple numbers", function() {
    expect(calculator.Multiply(4, 5, 2)).toBe(40);
  });
  it("should be able to get the last result", function() {
    expect(calculator.Add(2, 3)).toBe(5);
    expect(calculator.getLast()).toBe(5);
    expect(calculator.Multiply(2, 3)).toBe(6);
    expect(calculator.getLast()).toBe(6);
  });
  it("should be able to allow getLast as a parameter", function() {
    expect(calculator.Add(2, 3)).toBe(5);
    expect(calculator.getLast()).toBe(5);
    expect(calculator.Add(calculator.getLast(), 3)).toBe(8);
    expect(calculator.Multiply(2, 3)).toBe(6);
    expect(calculator.getLast()).toBe(6);
    expect(calculator.Multiply(calculator.getLast(), 3)).toBe(18);
  });
  it("should be able to store memory on memory slots", function() {
    expect(calculator.Add(2, 3)).toBe(5);
    expect(calculator.setSlot(1)).toBe(5);
    expect(calculator.getSlot(1)).toBe(5);
  });
  it("should be able to use memory slots as arguments", function() {
    expect(calculator.Add(2, 3)).toBe(5);
    expect(calculator.setSlot(1)).toBe(5);
    expect(calculator.getSlot(1)).toBe(5);
    expect(calculator.Add(calculator.setSlot(1), 3)).toBe(8);
  });
});
