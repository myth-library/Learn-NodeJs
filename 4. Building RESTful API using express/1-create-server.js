require('dotenv').config();
const express = require('express');
const app = express(); // create express application/server

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/api/courses', (req, res) => {
  res.send('API');
});

// route + route parameter
app.get('/api/post/:year?/:month?', (req, res) => {
  // res.send(req.params);
  res.send(req.query);
});

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server start on port ${port}...`));
