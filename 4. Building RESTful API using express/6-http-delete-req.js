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

app.delete('/api/courses/:id', (req, res) => {
  // Checking if course exist
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send('The course with the given ID was not found');

  // Delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  return res.send(course); // return is not necessory, because this is last statement of this block
});

// ==================================================

const port = process.env.PORT || 5001;
app.listen(port);

console.log(`Server start on port ${port}...`);
