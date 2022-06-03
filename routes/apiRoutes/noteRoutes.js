const router = require('express').Router();
const { noteCreate, noteDelete } = require('../../lib/notes');
const { notes }= require('../../db/db');

router.get('/notes', (req, res) => {
    let newNote = notes;
    res.json(newNote);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = noteCreate(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    noteDelete(notes, req.params.id);
    res.json(notes);
})

module.exports = router;