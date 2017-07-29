"use strict";

const testData = [];

for (let i = 1; i < 1000; i++) {
  testData.push(i);
}


console.log(testData.filter(x => x % 3 === 0 || x % 5 === 0).reduce((sum, val) => sum + val))

