const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0');

yargs.command({
    command:'add',
    description:'add a note',
    handler: ()=>{
        console.log('adding..')
    }
});

yargs.command({
    command:'remove',
    description:'remove a note',
    handler: ()=>{
        console.log('removing..')
    }
});

yargs.command({
    command:'list',
    description:'list a note',
    handler: ()=>{
        console.log('listing..')
    }
});

yargs.command({
    command:'read',
    description:'read a note',
    handler: ()=>{
        console.log('reading..')
    }
});

console.log(yargs.argv);