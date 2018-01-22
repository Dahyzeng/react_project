var mongoose = require('mongoose');
class MongooseConfig{
    constructor() {
        mongoose.connect('mongodb://localhost:27017/node');
    }
}

module.exports = new MongooseConfig();