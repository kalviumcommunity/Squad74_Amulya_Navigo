const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  trainNumber: String,
  source: String,
  destination: String,
  departureTime: String,
  arrivalTime: String
});

module.exports = mongoose.model('Train', trainSchema);
