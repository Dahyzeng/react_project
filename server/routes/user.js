let express = require('express');
let router = express.Router();
let userRepository = require('./../repository/userRepository');

router.get('/login', function(request, response) {
    userRepository.login(request.param('username'));
})