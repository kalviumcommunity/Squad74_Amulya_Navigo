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

module.exports = router;
