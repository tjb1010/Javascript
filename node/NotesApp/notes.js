const fs = require('fs');
const chalk = require('chalk');

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse('List of notes!'));

  notes.forEach(note => {
    console.log(note.title);
  });
};

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(chalk.blue.inverse.bold(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse(`${title} does not exist`));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
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

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse.bold(`The note "${title}" removed!`));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse.bold(`The note "${title}" does not exist!`));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
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
  remove: removeNote,
  read: readNote
};
