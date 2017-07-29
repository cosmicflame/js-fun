"use strict";

// Algorithm from https://stackoverflow.com/a/412942/121416
function primeFactors(n) {
  const factors = [];

  let testFactor = 2;

  while (n > 1) {
    while (n % testFactor === 0) {
      // We found a factor!
      // We loop to remove all multiples of this factor, i.e. 8 = 2*2*2
      factors.push(testFactor);
      n /= testFactor;
    }

    testFactor++;
  }

  return factors;
}

const testNum = 600851475143;

var factors = primeFactors(testNum).sort((a, b) => b - a); //sort asc so we can get [0] easily, i.e. the answer
console.log(factors);
console.log(factors[0]);

