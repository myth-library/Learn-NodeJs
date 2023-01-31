require('dotenv').config();
const express = require('express');
const app = express(); // create express application/server

// Data set
const courses = [
  { id: 1, course: 'Node.js' },
  { id: 2, course: 'React.js' },
  { id: 3, course: 'Express.js' },
];

// =================================================

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/api/courses', (req, res) => {
  res.send('API');
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id)); // if condition true? returns 'c'(parameter value)
  if (!course)
    return res.status(404).send('The course with the given ID was not found');

  return res.send(course);
});

// ==================================================

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server start on port ${port}...`));
