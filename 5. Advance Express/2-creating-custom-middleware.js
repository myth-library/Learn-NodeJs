require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json()); // inbuilt middlware fn. in express

// ========== custom middlware function ==========
app.use(function (req, res, next) {
  console.log('Logging...');
  next(); // move to next middleware fn.
});

app.use(function (req, res, next) {
  console.log('Authenticating...');
  next();
});

/* 

1. Output:
      Logging...
      Authenticating... 
      
2. we can create custom middleware functions in seperate file 

*/

// =================================================

app.get('/', (req, res) => {
  res.send('Hello World');
});

// ==================================================

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server start on port ${port}...`));
