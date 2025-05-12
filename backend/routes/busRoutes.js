const express = require('express');
const router = express.Router();
const Bus = require('../models/Buses');

// GET all buses
router.get('/', async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch buses' });
  }
});

// POST new bus
router.post('/', async (req, res) => {
  try {
    const newBus = new Bus(req.body);
    await newBus.save();
    res.status(201).json(newBus);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add bus' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedBus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBus) {
      return res.status(404).json({ message: 'Bus not found' });
    }
    res.json(updatedBus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
