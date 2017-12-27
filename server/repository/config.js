var mongoose = require('mongoose');
class MongooseConfig{
    constructor() {
        mongoose.connect('mongodb://localhost/node');
    }
}

module.exports = new MongooseConfig();