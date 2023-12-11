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

app.post('/login', (req, res) => {
  const {username, password} = red.body;
  const userDoc = User.findOne({username});
  // since the password is encrypted, use this to compare whether the password is correct
  const passOk = bcrypt.compareSync(password, userDoc.password);
  res.json(passOk);
});

app.listen(4000);