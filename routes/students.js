const express = require ("express");
const router = express.Router();
const Student = require ("../models/student") // Import the model created for the schema

// get all details from DB
router.get ("/", async (req, res) => 
{
    try
    {
        let students = await Student.find().countDocuments();
        return res.send (students.toString())
    }
    catch (ex)
    {
        return res.status(500).send(ex.message);
    }
});

// Create new student
router.post ("/", async (req, res) => 
{
    // Create directly to the database
    let newstudent = new Student
    ({
        //StudentID: req.body.StudentID,
        StudentName: req.body.StudentName,
        DateofBirth: req.body.DateofBirth,
        Address: req.body.Address,
        Guardian: req.body.Guardian, 
    });
    
      // Add to the database
      try
      {
        newstudent = await newstudent.save();
        return res.send(newstudent);
      }
      
      catch(err)
      {
          return res.status(500).send(err.message);
      }
})

module.exports = router;