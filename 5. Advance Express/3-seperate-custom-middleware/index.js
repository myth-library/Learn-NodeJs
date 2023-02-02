require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('./middlewares/logger');
const authenticator = require('./middlewares/auth');

app.use(express.json());

// ========== custom middlware function ==========
app.use(logger);
app.use(authenticator);

// =================================================

app.get('/', (req, res) => {
  res.send('Hello World');
});

// ==================================================

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server start on port ${port}...`));
