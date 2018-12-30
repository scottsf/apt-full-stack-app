require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const app = express();
app.use(bodyParser.json());

massive(process.env.DB_URI).then(instance => {
  app.set('db', instance)
})

const PORT = 3001;
app.listen(PORT, () => console.log(`Port is running on ${PORT}`))
