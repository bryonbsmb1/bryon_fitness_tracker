require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const path = require('path');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/homework18',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
mongoose.connection.once('open', () => {
    console.log('connected to database')
});

// GET route for exercise page
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/exercise.html'));
});

//GET route for stats page
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/stats.html'));
});

// Routes
app.use(require("./routes/api.js"));




app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));