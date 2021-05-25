// Chai dependency
const { assert } = require('chai');

// Import calculate factorial function
const calculateFactorial = require('../app');

// Factorial tests
describe('Calculate Factorial Numbers', () => {
  describe('Handle valid input', () => {
    it('calculateFactorial(0) == 1', () => {
      assert.equal(calculateFactorial(0), 1);
    });
    it('calculateFactorial(1) == 1', () => {
      assert.equal(calculateFactorial(1), 1);
    });
    it('calculateFactorial(2) == 2', () => {
      assert.equal(calculateFactorial(2), 2);
    });
    it('calculateFactorial(3) == 6', () => {
      assert.equal(calculateFactorial(3), 6);
    });
    it('calculateFactorial(5) == 120', () => {
      assert.equal(calculateFactorial(5), 120);
    });
  });
  describe('Handle Invalid input', () => {
    it('calculateFactorial(-1) == undefined', () => {
      assert.throws(() => calculateFactorial(-1), 'Undefined');
    });
    it('calculateFactorial("Hello") == undefined', () => {
      assert.equal(calculateFactorial('Hello'), 'undefined');
    });
  });
});
