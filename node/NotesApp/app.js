const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// yargs add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.add(argv.title, argv.body);
  }
});

// yargs remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title to delete',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.remove(argv.title);
  }
});

// yargs list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function(argv) {
    console.log('List of notes!', argv);
  }
});

// yargs read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function(argv) {
    console.log('Reading the note!', argv);
  }
});

yargs.parse();
