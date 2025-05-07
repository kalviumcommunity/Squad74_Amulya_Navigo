const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  busNumber: String,
  source: String,
  destination: String,
  departureTime: String,
  arrivalTime: String
});

module.exports = mongoose.model('Bus', busSchema);

