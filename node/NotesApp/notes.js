const fs = require('fs');
const chalk = require('chalk');

const listNotes = function() {
  return 'Your notes...';
};

const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse.bold(`Note "${title}" added!`));
  } else {
    console.log(chalk.red.inverse.bold(`Note "${title}" already exists!`));
  }
};

const removeNote = function(title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function(note) {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse.bold(`The note "${title}" removed!`));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse.bold(`The note "${title}" does not exist!`));
  }
};

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = {
  list: listNotes,
  add: addNote,
  remove: removeNote
};
