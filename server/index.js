const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const users = require('./routes/api/users');
const lessons = require('./routes/api/lessons');

app.use('/user', users);
app.use('/lessons', lessons);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
