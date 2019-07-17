// Write a function that takes an N digit number (min 3, max 10) and return a list of vanity phone number suggestions.

// For example if input number is 234, possible words that can be formed are (in alphabetical order):
// adg adh adi aeg aeh aei afg afh afi bdg bdh bdi beg beh bei bfg bfh bfi cdg cdh cdi ceg ceh cei cfg cfh cfi

// In your answer, provide unit tests to confirm your function works.

// Leave numbers in place that can not be mapped (1 and 0)

// ### Bonus

// Use a dictionary lookup to identify and prioritize permutations that are actual words. (/usr/share/dict/words or /usr/dict/words on Linux, or any public dictionary word list, or API of your choice).

// Constraints:
// Language - JavaScript, TypeScript or Python
// Unit Test framework - your choice

const vanitySuggestions = num => {
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const keypad = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };
  console.log(keypad[9].length);
  console.log(keypad[2][2]);
  const numArray = [...num.toString()];
  try {
    if (numArray.length < 3 || numArray.length > 10) {
      throw 'Argument must be 3-10 numbers';
    }
    const vanity = [];
    numArray.map(el => {
      if (el === '0' || el === '1') {
        vanity.push(el);
      } else if (Object.keys(keypad).includes(el)) {
        for (i = 0; i < keypad[el].length; i++) {
          console.log(keypad[el][i]);
        }
      }
    });
    return vanity.join('');
    console.log(vanity);
  } catch (error) {
    console.log(error);
  }
  console.log(keypad[2]);
};

console.log(vanitySuggestions(234));
