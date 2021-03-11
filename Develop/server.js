
//Dependencies
const express = require('express');



// Sets up Express App
let app = express();
const PORT = process.env.PORT || 4002;

// Sets up Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



// Routes
require('./routes/apiRoutes')(app);
require('./routes/html.js')(app);


//Starts Server Listening
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});

