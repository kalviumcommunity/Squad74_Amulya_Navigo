const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/',(_,res)=>{
    res.send("welcome to navigo use /api/travel/trains for train booking portal, use /api/travel/buses for bus booking portal, use /api/travel/metro for metro booking portal")
});

// Routes
app.use('/api/travel', require('./routes/travelRoutes'));

app.listen(5000, () => console.log('Server running on http://localhost:5000' ));
