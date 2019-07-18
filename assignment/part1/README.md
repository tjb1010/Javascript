part1.js

Usage:
const convertVanityToNumbers = require('{dir}/part1.js');

const getNumber = convertVanityToNumbers('800-GET-HELP')
console.log(getNumber) // +18004384357

Explanation:
The function takes in a string, converts it to lowercase, and then joins each individual character string into an array of strings.

It then removes any non number/letter characters and then converts the remaining letters to numbers.

Finally it prefixes the number with +1 to match E.164 format and returns it as a string
