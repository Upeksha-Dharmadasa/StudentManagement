const express = require ("express");
const router = express.Router();
const Subject = require ("../models/subject") // Import the model created for the schema

// get all details from DB
router.get ("/", async (req, res) => 
{
    try
    {
        let subjects = await Subject.find().countDocuments();
        return res.send (subjects.toString())
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
    let newsubject = new Subject
    ({
        SubjectName: req.body.SubjectName,
        TeachingHours: req.body.TeachingHours,
        Lecturer: req.body.Lecturer,
    });
    
      // Add to the database
      try
      {
        newsubject = await newsubject.save();
        return res.send(newsubject);
      }
      
      catch(err)
      {
          return res.status(500).send(err.message);
      }
})

module.exports = router;