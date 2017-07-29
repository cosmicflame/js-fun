"use strict";

// Inspired by the Java example here: https://gist.github.com/stuart-marks/9657079
// FizzBuzz with JavaScript arrow functions

/**
 * Returns a function that takes an argument `i`, then returns `returnCode` if `i` is divisible
 * by `mod` with a remainder of 0.  If this is not the case, the function calls function `f`, 
 * passing it the value of `i`.
*/
function ifmod(mod, returnCode, f) {
  return (i => i % mod === 0 ? returnCode : f(i))
}

/**
 * You know how this one goes.
 * Divisible by 3?  Fizz.
 * Divisible by 5?  Buzz.
 * Divisible by both?  FizzBuzz!
 * All other cases, just print the number
*/
function fizzbuzz(num) {
  return ifmod(15, "FizzBuzz!", 
    ifmod(3, "Fizz",
      ifmod(5, "Buzz",
        n => n)))(num)
}

// Basic validation that it works
[1,2,3,4,5,15].map(fizzbuzz).forEach(n => console.log(n));

// Hacky test suite, because using a library for this would be overkill
console.log("Test suite passing: " + [
    (() => ifmod(5, true, i => false)(3) === false)
  , (() => ifmod(5, true, i => false)(5) === true)
  , (() => ifmod(5, true, i => false)(0) === true)
  , (() => ifmod(3, "Some text", i => false)(3) === "Some text")
  , (() => ifmod(9, false, i => i * 2)(3) === 6)
  , (() => ifmod(0, true, i => "0 mod 0 has a remainder of NaN")(0) === "0 mod 0 has a remainder of NaN")
  , (() => fizzbuzz(3) === "Fizz")
  , (() => fizzbuzz(4) === 4)
  , (() => fizzbuzz(5) === "Buzz")
  , (() => fizzbuzz(15) === "FizzBuzz!")
  , (() => fizzbuzz(16) === 16)
  , (() => fizzbuzz(-1) === -1)
  , (() => fizzbuzz(0) === "FizzBuzz!")
].every((f, index, array) => {
  var result = f();
  if (result === true) {
    return true;
  } else {
    console.log(`Test failed: ${index+1}`);
    console.log(`Test: ${array[index].toString()}`);
    console.log(`Result: ${result}`);
    return false;
  }})
)
