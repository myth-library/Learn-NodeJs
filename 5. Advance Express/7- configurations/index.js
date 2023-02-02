require('dotenv').config();
const config = require('config');
const express = require('express');
const app = express();

app.use(express.json());

// Configurations
console.log('Application name: ' + config.get('name'));
console.log('Mail server: ' + config.get('mail.host'));
console.log('Password: ' + config.get('mail.password'));

/* 
1. Environment එකට අනුව configurations settings change කරන්න use කරන්න පුළුවන්
   npm package එකක් තමා 'config' කියලා කියන්නේ
        => npm i config

2. custom-environment-variables නමින් json file එකක් create කිරීමෙන්
      => config files වල properties dotenv files එක සමග map කරන්න පුළුවන්

3. Important: config files create කරන්න ඕනෙ 'config' folder එක ඇතුළේ 
*/

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3001, () => {
  console.log('server start on port 3001...');
});
