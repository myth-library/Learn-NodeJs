require('dotenv').config();
const express = require('express');
const app = express();

// ============ built-in middlewares ============
app.use(express.json());
app.use(express.urlencoded());

// Third-party middlewares: https://expressjs.com/en/resources/middleware.html

// =================================================

app.get('/', (req, res) => {
  res.send('Hello World');
});

// ==================================================

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server start on port ${port}...`));
