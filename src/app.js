const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connect } = require('./configs/database');
const apiRoutes = require('./apis/routes');
const { errorHandler } = require('./middlewares/errorHandler');
const { validateRequest } = require('./middlewares/validateRequest');

// Initialize Express application
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connect();

// config env vars
require('dotenv').config();

// Routes
app.use('/api', apiRoutes);

app.use(errorHandler);
app.use(validateRequest);

// Start the Express server
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

