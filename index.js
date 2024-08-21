const express = require('express');
const connectDB = require('./config/db');
const receiptBookRoutes = require('./routes/receipt_routes');

require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/receiptBooks', receiptBookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// ---------------------------------------------------------------- RUN PATH ---------------------------------------------------------------
//  http://localhost:5001/api/receiptBooks/all
// change end path weekly ,daily ,total , /