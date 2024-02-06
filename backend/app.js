const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const routes = require('./src/routes/index.routes');
app.use('/', routes);

module.exports = app;

