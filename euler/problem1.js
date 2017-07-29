"use strict";

const testData = [];


// In hindsight, this is really ugly
// Why create a dataset only to throw half of it away?
// I could - and should - have been filtering in the initial loop
for (let i = 1; i < 1000; i++) {
  testData.push(i);
}


console.log(testData.filter(x => x % 3 === 0 || x % 5 === 0).reduce((sum, val) => sum + val))

