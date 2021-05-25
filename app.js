/**
 * -------------------------------------
 *    UNIT TESTING WITH MOCHA AND CHAI
 * -------------------------------------
 *
 * Pair Programming with
 *
 * 1) Daniel Okello
 * 2) Cathy Akoth
 * 3) Joanita Kente Tushabe
 */

/*
     RECUSSIVE METHOD
    -------------------
     */
function calculateFactorial(n) {
  if (n < 0) {
    throw new Error('Undefined');
  }
  if (n < 2) {
    // return n * calculateFactorial(n - 1);
    return 1;
  } if (n >= 2) {
    return n * calculateFactorial(n - 1);
  } if (typeof (n) !== 'number') {
    return 'undefined';
  }
}

/*      LOOP METHOD
      ----------------
*/
// function calculateFactorial(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }

//   return result;
// }

// const result = factorialize(3);
// console.log(factorialize(3)); module.exports = factorialize;

// Export the calculate factorial function.
module.exports = calculateFactorial;
