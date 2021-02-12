const mongoose = require ('mongoose') // Import mongoose package
const subjectschema = new mongoose.Schema
(
    {
        SubjectName:
        {
            type: String,
            required: true
        },
        TeachingHours:
        {
            type: Number,
            required: true
        },
        Lecturer:
        {
            type: String,
            required: true
        }
    }
)

const Subject = mongoose.model("Subject" , subjectschema); // Create a model for the schema. Blueprint 
module.exports = Subject; // Export the model