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
  handler(argv) {
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
  handler(argv) {
    notes.remove(argv.title);
  }
});

// yargs list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    notes.list();
  }
});

// yargs read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note to read',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.read(argv.title);
  }
});

yargs.parse();
