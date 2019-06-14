const chalk = require('chalk');
const getNotes = require('./notes');

const msg = getNotes();
console.log(msg);

console.log(chalk.blue.inverse.bold('Success!'));
