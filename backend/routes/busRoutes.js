const express = require('express');
const router = express.Router();
const Bus = require('../models/bus');

// CREATE
router.post('/', async (req, res) => {
  try {
    const bus = new Bus(req.body);
    const savedBus = await bus.save();
    res.status(201).json(savedBus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all
router.get('/', async (req, res) => {
  try {
    const buses = await Bus.find();
    res.status(200).json(buses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ one
router.get('/:id', async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id);
    if (!bus) return res.status(404).json({ error: 'Bus not found' });
    res.status(200).json(bus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updatedBus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBus) return res.status(404).json({ error: 'Bus not found' });
    res.status(200).json(updatedBus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
