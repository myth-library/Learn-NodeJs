/* 
1. Templating engines used to, 
      + userට responses html markups විදියට send කරන්න

2. Template engines that can be used in Node
      + pug
      + mustache
      + EJS

   npm i pug
*/

require('dotenv').config();
const express = require('express');
const app = express();

// create view engine for the application
app.set('view engine', 'pug'); // express internally load this module, so we don't require
app.set('views', './views');

// =================================================

app.get('/', (req, res) => {
  res.render('index', { title: 'My Express App', message: 'Hello World' });
});

// ==================================================

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server start on port ${port}...`));
