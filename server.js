const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/rule-engine', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error: ", err));

// Importing routes
const ruleRoutes = require('./routes/rules');

// Using the routes for any requests starting with /api/rules
app.use('/api/rules', ruleRoutes);

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
