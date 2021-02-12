const express = require ('express'); // import express
const mongoose = require ('mongoose') // import mongoose
const PORT = 5000;
const app = express(); // Run the constructor for express (Create the express application)
const bodyParser = require('body-parser');

// Create the connection String
mongoose
    .connect ('mongodb://localhost/schooldb', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true }) 

    .then(() =>console.log ("Connected to DB successfully..."))
    .catch((err) => console.log ("Error has occured while connecting to Database...", err)
    
    );

const student = require ("./routes/students")
const subject = require ("./routes/subjects")
const main = require("./routes/main")

app.use(bodyParser.urlencoded({ extended: true })); // parse requests of content-type
app.use(bodyParser.json()); // parse requests of content-type - application/json
app.use ("/api/students", student);
app.use ("/api/subjects", subject);
app.use ("/", main);

// Run the server
app.listen(PORT, () => 
{
    console.log ("Started listening on port" + PORT)
});

