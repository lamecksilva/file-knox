// /server/index.js

// Importing stuff
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// instantiating the express
const app = express();

// Using Body Parser Middleware
app.use(bodyParser.json());
app.use(cors());

// Importing the routes and db URI
const users = require('./routes/users');
const db = require('./config/keys').mongoURI;

// Connecting to the mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  // If the connection works, print in console "MongoDB Connected"
  .then(() => console.log('MongoDB Connected'))
  // If fails, print the error
  .catch(error => console.log(error));

// Adding the router for the routes with /users
app.use('/api/users', users);

// Port of the express server (API)
const PORT = process.env.PORT || 9000;

app.use(express.static('client/dist'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

// Server Listening in port 9000
app.listen(PORT, () => console.log(`Server Running in Port ${PORT}`));
