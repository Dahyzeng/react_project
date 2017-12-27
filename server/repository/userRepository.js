let config = require('./config');
let UserModel = require('./../model/userModel');
class UserRepository{
    constructor(){};

    saveUser(person) {
        UserModel.create(person, function(err){
            console.log('save success');
        });
    }

    login(username) {
        UserModel.findByName(username, function(err, docs) {
            console.log(docs);
        });
    }
}
module.exports = new UserRepository();