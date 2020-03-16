const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0');

yargs.command({
    command:'add',
    describe:'add a note',
    builder:{
        title:{
            describe:'title of the note',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"body of note",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'title of the note to be removed',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command:'list',
    describe:'list a note',
    handler(){
        notes.listNotes();
    }
});

yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'Read a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});

yargs.parse();
