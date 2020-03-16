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
    handler: (argv)=>{
        console.log('adding..', argv.title, argv.body)
    }
});

yargs.command({
    command:'remove',
    describe:'remove a note',
    handler: ()=>{
        console.log('removing..')
    }
});

yargs.command({
    command:'list',
    describe:'list a note',
    handler: ()=>{
        console.log('listing..')
    }
});

yargs.command({
    command:'read',
    describe:'read a note',
    handler: ()=>{
        console.log('reading..')
    }
});

yargs.parse();