const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitness', {
  useNewUrlParser: true,
  useFindAndModify: false
});

// API routes
// app.use(require('./controllers/api.js'));

app.get('/exercise', (req, res) => {
    res.json('exercise')
});

app.get('/stats', (req, res) => {
    res.json('stats')
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
