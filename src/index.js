const express = require('express');
const bodyParser = require('body-parser');

const app = express();
console.log('Api Users App is running !!');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./app/controllers/index')(app);


app.listen(3000);