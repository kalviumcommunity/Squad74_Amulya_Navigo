const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(_,res)=>{
    res.send("welcome to navigo use /api/trains for train booking portal, use /api/buses for bus booking portal, use /api/users for user portal")
});

// Import routes
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');
const trainRoutes = require('./routes/trainRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/buses', busRoutes);
app.use('/api/trains', trainRoutes);

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
    console.log("MongoDB connected");
}).catch((err) => {
    console.error(err);
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

