
let UserModel = require('./../model/userModel');
class UserRepository{
    constructor(){};

    saveUser(person){
        UserModel.create(person, function(err){
            console.log('save success');
        });
    }

    login(username) {
        UserModel.find(username, function(err, docs) {
            console.log(docs);
            return docs;
        });
    }
}
module.exports = new UserRepository();