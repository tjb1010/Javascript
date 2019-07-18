// In your answer, provide unit tests to confirm your function works.

// ### Bonus

// Use a dictionary lookup to identify and prioritize permutations that are actual words. (/usr/share/dict/words or /usr/dict/words on Linux, or any public dictionary word list, or API of your choice).

const checkWord = require('./checkWord');

const vanitySuggestions = async num => {
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

  const numArray = [...num.toString()];
  try {
    if (numArray.length < 3 || numArray.length > 10) {
      throw 'Argument must be 3-10 numbers';
    }
    let options = [];
    const newArr = [];
    numArray.map(el => {
      newArr.push(keypad[el]);
    });
    result = newArr.reduce((a, b) =>
      a.reduce((c, d) => c.concat(b.map(e => [].concat(d, e))), [])
    );
    options = result.map(a => a.join(''));
    console.log('options :', options);
    const vanity = await checkWord(options);
    console.log(vanity);
    if (vanity.length === 0) {
      console.log('No words can be made');
    }
    return await vanity;
  } catch (error) {
    console.log(error);
  }
};

vanitySuggestions(234);
