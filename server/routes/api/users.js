const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Users
router.get('/', async (req, res) => {
  const users = await loadUsersCollection();
  res.send(await users.find({}).toArray());
  return;
});

// Add User
router.post('/', async (req, res) => {
  const users = await loadUsersCollection();
  await users.insertOne({
    email: req.body.email,
    password: req.body.password,
    createdAt: new Date()
  });
  res.status(201).send();
  return;
});

async function loadUsersCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://spike:spike@cluster0.smyaknq.mongodb.net/test',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
  return client.db('test').collection('users');
}

module.exports = router;
