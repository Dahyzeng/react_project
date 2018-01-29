let express = require('express');
let router = express.Router();
let userRepository = require('./../repository/userRepository');

router.post('/login', function(request, response) {
    console.log(request.body);
    console.log(request.body['email']);
    const user = userRepository.login(request.body['email']);
    console.log(user);
    response.send(user);
});

router.post('/save', function(request, response) {
    console.log(request.body);
    userRepository.saveUser(request.body);
    response.send({success: true});
});

module.exports = router;