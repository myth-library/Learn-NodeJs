require('dotenv').config();
const express = require('express');
const Joi = require('joi');
const app = express();

app.use(express.json());

// Data set
const courses = [
  { id: 1, course: 'Node.js' },
  { id: 2, course: 'React.js' },
  { id: 3, course: 'Express.js' },
];

// =================================================

app.put('/api/courses/:id', (req, res) => {
  // Look up the course
  // If not existing, return 404 - not fount request
  const course = courses.find((c) => c.id === parseInt(req.params.id)); // if condition true? returns 'c'(parameter value)
  if (!course)
    return res.status(404).send('The course with the given ID was not found');

  // Validate
  // If invalid, return 400 - bad request
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Update course
  // Return the updated course
  course.course = req.body.course;
  return res.send(courses);
});

// ==================================================

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server start on port ${port}...`));

// ==================================================

function validateCourse(course) {
  const schema = Joi.object({
    course: Joi.string().min(3).required(),
  });

  return schema.validate(course);
}
