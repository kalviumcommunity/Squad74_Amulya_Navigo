const express = require('express');
const router = express.Router();
const Bus = require('../models/Buses');

router.get('/', async (req, res) => {
  const buses = await Bus.find();
  res.json(buses);
});

module.exports = router;
