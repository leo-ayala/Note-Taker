const path = require('path');
const router = require('express').Router();
const notes = require('../db.json');
const fs = require('fs');

router.post('/notes', (req, res) => {
    console.log(req.body)
    res.json(req.body);
    notes.push(req.body)
    fs.writeFileSync(
      path.json(__dirname, '../db.json'),
      JSON.stringify(notes, null, 2)
    )
});

router.get('/notes', (req, res) => {
  res.json(notes)
})



  module.exports = router;