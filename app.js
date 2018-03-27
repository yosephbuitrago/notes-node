console.log('starting app');
const fs = require('fs');
const notes = require('./notes.js');
const _=require('lodash');
const yargs = require('yargs');

const titleOptions = {
    describe:'Title of the node',
    demand: true,
    alias: 't'
}


const argv = yargs
    .command('add', 'Add a new note',{
        title : titleOptions,
        body:{
            describe:'Body of the node',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'List all the notes')
    .command('remove', 'Remove a note by Title',{
        title:titleOptions
    })
    .command('read', 'Read a note',{
        title:titleOptions
    })
    .help()
    .argv;

//console.log('Yargs: ',argv);

switch(argv._[0]) {
    case 'add':
        //console.log("add");
        var note = notes.addNote(argv.title,argv.body);
        if (note){
            console.log('Note created');
            notes.logNote(note)
            
        }else{
            console.log("Sorry, Note title taken");
        }
        break;
    case 'remove':
        var noteRemoved = notes.removeNote(argv.title);
        var message = noteRemoved ? 'Note was removed' : 'Note not found';
        console.log(message);
        break;
    case 'read':
        var note = notes.getNote(argv.title);
        if (note){
            console.log('Note found');
            notes.logNote(note);
        }else{
            console.log('Note not found');
        }
        break;
    case 'list':
        var allNotes = notes.getAll();
        console.log(`Printing ${allNotes.length} note(s).`);
        allNotes.forEach((note) => notes.logNote(note));
        break;
    default:
        console.log("Please enter a parameter")
}
