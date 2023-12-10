const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

// connect to Mongoose Database
mongoose.connect('mongodb+srv://nateng98:EqZnMVSootHXtxhG@pyroscript.neimdc1.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', (req, res) => {
  const {username, password} = req.body;
  res.json({requestData:{username, password}});

});

app.listen(4000);