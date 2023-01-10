const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Lessons
router.get('/', async (req, res) => {
  const lessons = await loadLessonsCollection();
  res.send(await lessons.find({}).toArray());
  return;
});


async function loadLessonsCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://test:test@cluster0.3fipndn.mongodb.net/test',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
  return client.db('test').collection('lessons');
}

module.exports = router;
