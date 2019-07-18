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
    return wordArray;
  } catch (error) {
    console.log(error);
  }
}
module.exports = checkWord;
