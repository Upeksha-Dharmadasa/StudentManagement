const mongoose = require ('mongoose') // Import mongoose package
const studentschema = new mongoose.Schema
(
    {
        /*StudentID:
        {
            type: Number,
            required: true
        },*/
        StudentName:
        {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 30
        },
        DateofBirth:
        {
            type: Number,
            required: true
        },
        Address:
        {
            type: String,
            required: true
        },
        Guardian:
        {
            type: String,
            required: true
        } 
    }
)

const Student = mongoose.model("Student" , studentschema); // Create a model for the schema. Blueprint 
module.exports = Student; // Export the model