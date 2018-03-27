/* var obj = {
    name: 'Yoseph'
}

var stringObj = JSON.stringify(obj);

console.log(typeof stringObj);
console.log(stringObj); */

/* var personString = '{"name":"yoseph", "age":25}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person); */

const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some body'
}

fs.writeFileSync('notes.json',JSON.stringify(originalNote));

var noteString= fs.readFileSync('notes.json')
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note)