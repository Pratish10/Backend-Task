const express = require("express");
const router = express.Router();
const Student = require("../models/userModel")


// POST /students - Create a new student
router.post("/",async (req,res)=>{
    const student = new Student({
      name: req.body.name,
      age: req.body.age,
      grade: req.body.grade,
      subjects: req.body.subjects,
    })
    try {
      const newStudent = await student.save();
      res.status(200).send({newStudent});
    } catch (error) {
      res.status(500).json({messgae: error.message});
    }
})

// GET /students - Retrieve all students
router.get("/", async(req,res)=>{
    try {
      const students = await Student.find();
      if (students) res.status(200).send(students);
    } catch (error) {
      res.status(500).json({messgae: error.message});
    }
})
  
// GET /students/:id - get student by id 
router.get("/:id", async(req,res)=>{
    try {
      const studentId = req.params.id;
    //   console.log(studentId);
  
      const student = await Student.findById(studentId);
  
      if (student == null) return res.status(404).json({ message: 'Student not found' });
  
      res.status(200).send(student);
    } catch (error) {
      res.status(500).json({messgae: error.message});
    }
})
  
// PUT /students/:id - Update a specific student
router.put('/:id',  async (req, res) => {
    try {

    const student = await Student.findById(req.params.id);
    if (student == null) {
      return res.status(404).json({ message: 'Student not found' });
    }

    if (req.body.name) {
        student.name = req.body.name;
      }
      if (req.body.age) {
        student.age = req.body.age;
      }
      if (req.body.grade) {
        student.grade = req.body.grade;
      }
      if (req.body.subjects) {
        student.subjects = req.body.subjects;
      }

    const updatedStudent = await student.save();
    res.status(200).send(updatedStudent);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});
  
// DELETE /students/:id - Delete a specific student
router.delete("/:id",async(req,res)=>{
    try {
    const student = await Student.findById(req.params.id);
    if (student == null) {
      return res.status(404).json({ message: 'Student not found' });
    }
      await student.remove();
      res.json({message:"Student Deleted!"})
    } catch (error) {
      res.status(500).json({messgae: error.message});
  
    }
})

module.exports = router;