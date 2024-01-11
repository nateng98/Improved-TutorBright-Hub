const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const PostSchema = new Schema({
  title: String,
  summary: String,
  content: String, 
  cover: String
}, {
  // know when it's posted
  timestamps: true
});

const PostModel = model('Post', PostSchema);

module.exports = PostModel;