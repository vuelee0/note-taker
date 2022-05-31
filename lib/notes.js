// create a new note
function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, './db/db.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    console.log(note);
    return note;
};

// find the note by that ID
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};

// get the index of the note
function getIndex(id, notesArray) {
    const noteIndex = notesArray.findIndex(note => note.id === id);
    return noteIndex;
};

// validate title and text are inputted
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
      return false;
    }
    if (!note.text || typeof note.text !== 'string') {
      return false;
    }
    return true;
}

module.exports = {
    findById,
    getIndex,
    createNote,
    validateNote
};