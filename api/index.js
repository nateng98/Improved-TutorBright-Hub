const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({dest: 'uploads/'});
const fs = require('fs');
const Post = require('./models/Post')

// use generate salt to encryt password on mongoose
const salt = bcrypt.genSaltSync(10);
const secret = 'randomstring98'

app.use(cors({credentials:true, origin:'http://localhost:5173'})); // if using credential (LoginPage.jsx), we have to provide more infomation (credential: true, and origin: host link)
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads')); // end point for cover

// connect to Mongoose Database
mongoose.connect('mongodb+srv://nateng98:EqZnMVSootHXtxhG@pyroscript.neimdc1.mongodb.net/?retryWrites=true&w=majority');

// end point for register
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

// end point for login
app.post('/login', async (req, res) => {
  const {username, password} = req.body;
  const userDoc = await User.findOne({username}); // find the username that match with the input
  // since the password is encrypted, use this to compare whether the password is correct
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if(passOk){
    //logged in
    jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
      if(err) throw err;
      res.cookie('token', token).json({
        id:userDoc._id,
        username
      });
    });
  } else {
    res.status(400).json('wrong credentials');
  }
});

app.get('/profile', (req,res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err,info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post('/logout', (req,res) => {
  res.cookie('token', '').json('ok');
});

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
  const {originalname, path} = req.file;
  const parts = originalname.split('.');
  //get the extension to save the file as with the extension in upload
  const ext = parts[parts.length - 1];
  //file name + . + file extension
  const newPath = path + '.' + ext;
  fs.renameSync(path, newPath);

  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err,info) => {
    if (err) throw err;
     // get all title, summary and content Create post clicked
    const {title, summary, content} = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      // grab user name
      author: info.id
    });
  res.json(postDoc);
  });

});

app.get('/post', async (req,res) => {
  // only show the username of author, not password
  res.json(await Post.find()
    .populate('author', ['username'])
    .sort({createdAt: -1}) // order by the newest
    .limit(20) // limit 20 posts
    );
})

app.listen(4000);