// Dependencies

const path = require('path');
const fs = require('fs');


// Routes

module.exports = (app) => {

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
}