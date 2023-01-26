const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Logger MiddleWare
app.use((req, res, next) => {
  console.log('New Request: -');
  console.log('Host: ',req.hostname);
  console.log('Path: ',req.path);
  console.log('Method: ',req.method);
  next();
});

const users = require('./routes/api/users');
const lessons = require('./routes/api/lessons');
const orders = require('./routes/api/orders');
const search = require('./routes/api/search');

app.use('/user', users);
app.use('/lessons', lessons);
app.use('/orders', orders);
app.use('/search', search);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
