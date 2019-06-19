const fs = require('fs');

const book = {
  title: ' Ego is  the Enemy',
  author: 'Ryan Holiday'
};

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const parsed = JSON.parse(bookJSON);
console.log(parsed.author);

fs.writeFileSync('1-json.json', bookJSON);
