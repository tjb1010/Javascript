part2.js

Usage:
const vanitySuggestions = require('{dir}/part2.js');

const getVanity = vanitySuggestions('234')
console.log(getVanity) // ['beg']

Explanation:
The function takes in a number, converts each digit to a string within a single array, and finds each possible matching keypad value. It then finds every possible permutation of the possible letters.

The permutations are passed into a spellchecker to see if they are known english words. The spellchecker function removes any non words and then returns an array of possible vanity words.
