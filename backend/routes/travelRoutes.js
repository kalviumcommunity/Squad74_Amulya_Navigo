const express = require('express');
const router = express.Router();

const buses = [
  { id: 1, route: "City A to City B", time: "09:00 AM" },
  { id: 2, route: "City B to City C", time: "11:30 AM" }
];

const trains = [
  { id: 1, route: "Station X to Station Y", departure: "08:00 AM" },
  { id: 2, route: "Station Y to Station Z", departure: "01:00 PM" }
];

const metro = [
  { message: "Metro services coming soon!" }
];

// Endpoints
router.get('/buses', (_, res) => {
  res.json(buses);
});

router.get('/trains', (_, res) => {
  res.json(trains);
});

router.get('/metro', (_, res) => {
  res.json(metro);
});

module.exports = router;
