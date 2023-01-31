require('dotenv').config();
const express = require('express');
const app = express(); // create express application/server

/* By default in express, 'req.body.name' feauture not enabled
   so we enable that feature (request body එක read කිරීම) 

   + json() is a built-in middleware function in Express
   + used to parse(විග්‍රහ කරන්න) the incoming requests body with JSON object */
app.use(express.json());

// Data set
const courses = [
  { id: 1, course: 'Node.js' },
  { id: 2, course: 'React.js' },
  { id: 3, course: 'Express.js' },
];

// =================================================

app.post('/api/courses', (req, res) => {
  const course = {
    id: courses.length + 1,
    course: req.body.course,
  };
  courses.push(course);

  return res.send(course);
});

// ==================================================

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server start on port ${port}...`));
