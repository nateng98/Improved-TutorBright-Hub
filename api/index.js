const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();
const User = require('./models/User');
const bcrypt = require('bcryptjs');

// use generate salt to encryt password on mongoose
const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

// connect to Mongoose Database
mongoose.connect('mongodb+srv://nateng98:EqZnMVSootHXtxhG@pyroscript.neimdc1.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req, res) => {
  const {username, password} = req.body;
  try {
    const userDoc = await User.create({
      username, 
      password:bcrypt.hashSync(password, salt) // encrypt password: showing random string on mongoose
    })
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }

});

app.listen(4000);