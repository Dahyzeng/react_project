const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node');

module.exports = mongoose.model('user', new mongoose.Schema({
    name : String,
    email : String,
    password : String
}));