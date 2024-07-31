const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initializeWorkbook, readCoursesFromExcel, writeCoursesToExcel } = require('./excelUtils');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Initialize workbook
initializeWorkbook();

// GET all courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await readCoursesFromExcel();
    res.json(courses);
  } catch (error) {
    res.status(500).send('Error reading courses');
  }
});

// POST add a new course
app.post('/api/add-course', async (req, res) => {
  try {
    const course = req.body;
    const courses = await readCoursesFromExcel();
    courses.push(course);
    await writeCoursesToExcel(courses);
    res.status(200).send('Course added');
  } catch (error) {
    res.status(500).send('Error adding course');
  }
});

// DELETE a course by id
app.post('/api/delete-course', async (req, res) => {
  try {
    const { id } = req.body;
    let courses = await readCoursesFromExcel();
    courses = courses.filter(course => course.id !== id);
    await writeCoursesToExcel(courses);
    res.status(200).send('Course deleted');
  } catch (error) {
    res.status(500).send('Error deleting course');
  }
});

// PUT update a course by id
app.put('/api/update-course/:id', async (req, res) => {
  const courseId = req.params.id;
  const updatedCourse = req.body;

  try {
    let courses = await readCoursesFromExcel();
    // Remove the old course
    courses = courses.filter(course => course.id !== courseId);
    // Add the updated course
    courses.push(updatedCourse);
    await writeCoursesToExcel(courses);
    res.status(200).json({ message: 'Course updated successfully' });
  } catch (err) {
    console.error('Error updating course:', err);
    res.status(500).json({ error: 'Failed to update course' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
