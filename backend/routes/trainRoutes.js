const express = require('express');
const router = express.Router();
const Train = require('../models/Train');

router.get('/', async (req, res) => {
  const trains = await Train.find();
  res.json(trains);
});

module.exports = router;
