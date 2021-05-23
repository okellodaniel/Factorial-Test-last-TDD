function calculateFactorial(n) {
  if (n < 2) {
    // return n * calculateFactorial(n - 1);
    return 1;
  }
  if (n >= 2) {
    return n * calculateFactorial(n - 1);
  }
}

module.exports = calculateFactorial;
