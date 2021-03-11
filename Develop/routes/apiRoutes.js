const uuid = require('uuid/v1')

const fs =  require('fs');

module.exports = (app) => {

let notes = require(__dirname+'/../db/db.json')

//Display Notes
app.get('/api/notes', function(req,res) {

    res.json(notes)
})

// // Create a new note

app.post('/api/notes', (req,res) => {

    let addNote = req.body 
    addNote.id =  uuid()
    notes.push(addNote)
    const data = JSON.stringify(notes)

    fs.writeFile(__dirname+'/../db/db.json', data, function(err) {
        if (err) throw err
    })


    res.end()
}
)

// Delete Notes

app.delete('/api/notes/:id', (req, res) => {

    const id = req.params.id
    const filterNotes = notes.filter(note => {

        return note.id != id

    })

    const newNote = JSON.stringify(filterNotes);
    notes = filterNotes
    fs.writeFileSync(__dirname+'/../db/db.json', newNote, function(err) {
        if (err) throw err
    });

    res.end()
})
}

