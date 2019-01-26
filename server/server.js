require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const ctr = require('./controller.js');

const app = express();
app.use(bodyParser.json());
app.use(
  session({
    secret: 'thisissecret',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true},
    maxAge: 60,
  }),
);

massive(process.env.DB_URI).then(instance => {
  app.set('db', instance);
});

app.get(`/api/houses`, ctr.read);
app.post(`/api/house`, ctr.create);
app.delete(`/api/house/:id`, ctr.remove);

const PORT = 3001;
app.listen(PORT, () => console.log(`Port is running on ${PORT}`));
