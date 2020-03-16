const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNote();
    debugger
    let duplicate = notes.find((note) => note.title === title);
    if(!duplicate){
        let data = {title: title, body: body};
        notes.push(data);
        saveNote(notes);
    }
    else{
        console.log(chalk.red.inverse('Duplicate!!!'));
    }
};

const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json').toString();
        return JSON.parse(dataBuffer);
    } catch (e) {
        return [];
    }

};

const saveNote = (notes) => { 
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const removeNote = (title) =>{
    let notes = loadNote();
    let filterdNotes = notes.filter( (note) =>{
        return note.title !== title;
    });
    if(filterdNotes.length === notes.length){
        console.log(chalk.red('Note not exist!!'));
    }else{
        saveNote(filterdNotes);
        console.log(chalk.green('Note removed!!'));
    }
}

const listNotes = () =>{
    let notes = loadNote();
    console.log(chalk.yellow.inverse("------------ notes ---------------"));
    notes.forEach(element => {
        console.log(element.title);
    });
}

const readNote = (title) =>{
    let notes = loadNote();
    let note = notes.find( (val) => val.title === title);
    if(note){
        console.log(chalk.inverse.green(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.inverse.red('Note not found'));
    }
}

module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
};
