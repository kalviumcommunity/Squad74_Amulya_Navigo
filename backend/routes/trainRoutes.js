const express = require('express');
const router = express.Router();
const Train = require('../models/Train');

// GET all trains
router.get('/', async (req, res) => {
  try {
    const trains = await Train.find();
    res.json(trains);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch trains' });
  }
});

// POST new train
router.post('/', async (req, res) => {
  try {
    const newTrain = new Train(req.body);
    await newTrain.save();
    res.status(201).json(newTrain);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add train' });
  }
});

router.put('/trains/:id', async (req, res) => {
  try {
    const train = await Train.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!train) return res.status(404).json({ error: 'Train not found' });
    res.json(train);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update train' });
  }
});

module.exports = router;
