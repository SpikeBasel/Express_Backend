const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Orders
router.get('/', async (req, res) => {
  const orders = await loadOrdersCollection();
  res.send(await orders.find({}).toArray());
  return;
});

// Add Orders
router.post('/', async (req, res) => {
  const orders = await loadOrdersCollection();
  await orders.insertOne({
    name: req.body.name,
    phone_number: req.body.phone_number,
    lesson_id: req.body.lesson_id,
    number_of_space: req.body.number_of_space
  });
  res.status(201).send();
  return;
});

async function loadOrdersCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://spike:spike@cluster0.smyaknq.mongodb.net/test',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
  return client.db('test').collection('orders');
}

module.exports = router;
