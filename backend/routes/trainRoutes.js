const express = require('express');
const router = express.Router();
const Train = require('../models/train');

// CREATE
router.post('/', async (req, res) => {
  try {
    const train = new Train(req.body);
    const savedTrain = await train.save();
    res.status(201).json(savedTrain);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all
router.get('/', async (req, res) => {
  try {
    const trains = await Train.find();
    res.status(200).json(trains);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ one
router.get('/:id', async (req, res) => {
  try {
    const train = await Train.findById(req.params.id);
    if (!train) return res.status(404).json({ error: 'Train not found' });
    res.status(200).json(train);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updatedTrain = await Train.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTrain) return res.status(404).json({ error: 'Train not found' });
    res.status(200).json(updatedTrain);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
