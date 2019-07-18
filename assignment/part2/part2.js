const checkWord = require('./checkWord');

const vanitySuggestions = num => {
  const numArray = [...num.toString()];
  const keypad = {
    '0': ['0'],
    '1': ['1'],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };

  try {
    if (numArray.length < 3 || numArray.length > 10) {
      throw 'Argument must be 3-10 numbers';
    }
    let options = [];
    let keysArray = [];
    // convert each number to corresponding key values
    numArray.map(el => {
      keysArray.push(keypad[el]);
    });
    // concat arrays in keysArray to discover all possible permutations
    combinedArray = keysArray.reduce((a, b) =>
      a.reduce((c, d) => c.concat(b.map(e => [].concat(d, e))), [])
    );
    // join individual letters into arrays of strings
    options = combinedArray.map(a => a.join(''));
    // check each permutation to see if it spells a word

    const vanity = checkWord(options);
    if (vanity.length === 0) {
      console.log('No words can be made');
    }

    return vanity;
  } catch (error) {
    console.log(error);
  }
};

module.exports = vanitySuggestions;
