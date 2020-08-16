const path = require('path');
const router = require('express').Router();
let notes = require('../db.json');
const fs = require('fs');

router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();
  notes.push(req.body)
  fs.writeFileSync(
    path.join(__dirname, '../db.json'),
    JSON.stringify(notes, null, 2)
  )
  res.json(req.body);
});

router.get('/notes', (req, res) => {
  res.json(notes)
})


function findById(id, notes) {
  const newArray = notes.filter(note => note.id !== id);
  return newArray;
}

router.delete('/notes/:id', (req, res) => {
  const NewNotes = findById(req.params.id, notes);
  notes = NewNotes;
  for (i = 0; i < notes.length; i++) {
    notes[i].id = i.toString();
  }
  fs.writeFileSync(
    path.join(__dirname, '../db.json'),
    JSON.stringify(notes, null, 2)
  )
  res.json(notes)
})


module.exports = router;