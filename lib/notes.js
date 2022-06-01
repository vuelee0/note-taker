const fs = require('fs');
const path = require("path");

// create a new note
function noteCreate(body, notesArray) {
  const note = body;

  notesArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, './db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
};

function noteDelete(notesArray, id) {
  let deleteNote = parseInt(id);

  notesArray.splice(deleteNote, 1);

  for (let i = deleteNote; i < notesArray.length; i++) {
    notesArray[i].id = i.toString();
  }

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
};

module.exports = {
  noteCreate,
  noteDelete
};