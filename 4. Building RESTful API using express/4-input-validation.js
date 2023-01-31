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

app.post('/api/courses', (req, res) => {
  const schema = Joi.object({
    course: Joi.string().min(3).required(),
  });

  const result = schema.validate(req.body);
  if (result.error)
    return res.status(400).send(result.error.details[0].message);

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
