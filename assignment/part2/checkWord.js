const axios = require('axios');
const fetch = require('node-fetch');
// function checkWord(word) {
//   var wordArray = [];
//    axios
//     .get(`https://api.datamuse.com//words?sp=${word}`)
//     .then(response => {
//       wordArray.push(response.data[0].word)
//     })
//     .catch(error => error)
//     return wordArray
// }

// checkWord('test')

// console.log('wordArray :', wordArray);

// if (result.data[0].score >= 500) {
//   wordArray.push(result.data[0].word);
//   console.log('In if{}: ', wordArray);
// }
// console.log('In .then(): ', wordArray);
// console.log('wordArray :', wordArray);
const wordArray = [];

// function checkWords(word) {
//   fetch(`https://api.datamuse.com//words?sp=${word}`)
//     .then(response => response.json())
//     .then(response => {
//       theWord = JSON.stringify(response[0].word);
//       console.log('theWord :', typeof theWord);
//       wordArray.push(theWord);
//       console.log('wordArray :', wordArray);
//       return wordArray;
//     });
// }

function checkWords(word) {
  return axios
    .get(`https://api.datamuse.com//words?sp=${word}`)
    .then(function(response) {
      wordArray.push(response.data[0].word);
      return wordArray;
    })
    .catch(function(error) {
      console.log(error);
    });
}
checkWords('test');
setTimeout(() => {
  console.log('wordArray :', wordArray);
}, 1000);
// async function handleResponse(word) {
//   const result = await axiosTest(word);
//   console.log(result);
//   wordArray.push(result);
// }
// console.log(wordArray);

// handleResponse('testing');

// module.exports = checkWord;
