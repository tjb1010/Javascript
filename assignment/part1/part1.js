const convertVanityToNumbers = vanityNumber => {
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const keypad = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };
  const lowerCased = vanityNumber.toLowerCase();
  const vanityToArray = [...lowerCased];

  // convert keypad to one array to be able to filter it
  const keypadToArray = Array.from(
    Object.values(keypad).reduce((a, b) => a.concat(b))
  );
  // remove characters that aren't numbers/letters
  const removeSpecialChars = vanityToArray.filter(
    a => nums.includes(a) || keypadToArray.includes(a)
  );

  // find each letter in string and convert to correct number
  const fullNumbers = [];
  try {
    // verify input is 10 chars
    if (removeSpecialChars.length !== 10) {
      throw 'Argument must be 10 characters';
    }
    removeSpecialChars.map(el => {
      if (nums.includes(el)) {
        fullNumbers.push(el);
      } else if (keypadToArray.includes(el)) {
        for (i = 2; i < 10; i++) {
          if (keypad[i].includes(el)) {
            fullNumbers.push(i);
          }
        }
      }
    });
    // prefix with +1
    fullNumbers.unshift('+', 1);
    // rejoin string and verify is 10 chars long
    const phoneNumber = fullNumbers.join('');
    return phoneNumber;
  } catch (error) {
    console.log(error);
  }
};

// ! ================================ Remove this
const test = '365-windows';
console.log(convertVanityToNumbers(test));
// ! ==========================================
module.exports = convertVanityToNumbers;
