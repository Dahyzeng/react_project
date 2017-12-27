let mongoose = require('mongoose');

module.exports = mongoose.model('user', new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    password : String
}));