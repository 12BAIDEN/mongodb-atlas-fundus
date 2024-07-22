const express = require('express');
const cors = require('cors');
const { connect } = require('./database'); // Import connect function

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // To handle JSON requests

// Connect to MongoDB
connect().catch(error => {
  console.error('Failed to connect to MongoDB:', error);
  process.exit(1); // Exit the process if MongoDB connection fails
});

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

//
