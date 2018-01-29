
let UserModel = require('./../model/userModel');
class UserRepository{
    constructor(){};

    saveUser(person, callback){
        UserModel.create(person, function(err){
            console.log('save success');
        });
    }

    login(email, callback) {
        UserModel.find({email: email}, function(err, docs) {
            console.log(docs);
            return docs;
        });
    }
}
module.exports = new UserRepository();