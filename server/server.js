const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3001;
app.listen(PORT, () => console.log(`Port is running on ${PORT}`))
