const Typo = require('typo-js');

function checkWord(words) {
  const dictionary = new Typo('en_US');
  const wordArray = [];
  try {
    if (!Array.isArray(words)) {
      throw 'Pass in an array of strings';
    }
    words.map(word => {
      const spellsWord = dictionary.check(word);
      if (spellsWord) {
        wordArray.push(word);
      }
    });
    return wordArray;
  } catch (error) {
    console.log(error);
  }
}
module.exports = checkWord;
