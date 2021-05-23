const { assert } = require('chai');
const calculateFactorial = require('../app');

describe('Calculate Factorial Numbers', () => {
  describe('Handle valid input', () => {
    it('Should return 1 for factorial of 0', () => {
      assert.equal(calculateFactorial(0), 1);
    });
    it('should return 1 for factorial of 1', () => {
      assert.equal(calculateFactorial(1), 1);
    });
    it('should return 2 for the factorial of 2', () => {
      assert.equal(calculateFactorial(2), 2);
    });
    it('should return 6 for the factorial of 3', () => {
      assert.equal(calculateFactorial(3), 6);
    });
    it('shpudl return 120 for the factorial of 5', () => {
      assert.equal(calculateFactorial(5), 120);
    });
    describe('Handle Invalid input', () => {
      it('should return undefined for the factorial of -1', ()=> {
        assert.equal(calculateFactorial(-1), 'undefined');
      });
      it('should return undefined for the factorial of Hello', ()=> {
        assert.equal(calculateFactorial('Hello'), 'undefined');
      });
    });
  });
});
