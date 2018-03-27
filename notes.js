console.log('starting notes.js');
const fs = require('fs');

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note={
        title,
        body
    }
    var duplicateNotes = notes.filter((note) => note.title === title);
   
    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
    
}

var getNote = (title) => {
    let notes = fetchNotes();
    let filterNote =  notes.filter((note) => note.title === title);
    return filterNote[0];
}

var removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (error) {
        return [];
    }

}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

const logNote = (note) => {
    debugger;
    console.log('--');
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};