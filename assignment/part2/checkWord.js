const Typo = require('typo-js');

function checkWord(words) {
  const dictionary = new Typo('en_US');
  const wordArray = [];
  try {
    if (!Array.isArray(words)) {
      throw 'Pass in an array of strings';
    }
    for (i in words) {
      const spellsWord = dictionary.check(words[i]);
      if (spellsWord) {
        wordArray.push(words[i]);
      }
    }
    // console.log('wordArray :', wordArray);
    console.log('wordArray :', Array.isArray(wordArray));
    return wordArray;
  } catch (error) {
    console.log(error);
  }
}

// console.log(checkWord(['this', 'dfds', 'is', 'aflkdsj', 'a', 'test']));
// checkWord(['this', 'dfds', 'is', 'aflkdsj', 'a', 'test']);
module.exports = checkWord;
