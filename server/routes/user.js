let express = require('express');
let router = express.Router();
let userRepository = require('./../repository/userRepository');

router.get('/login', function(request, response) {
    // const user = userRepository.login(request.param('username'));
    // console.log(user);
    response.send(JSON.stringify({email: '11@qq.com', name: 'dahy'}));
});

router.post('/save', function(request, response) {
    // const person = {};
    // person.email = request.getParameter('email');
    // person.name = request.getParameter('name');
    // person.password = request.getParameter('password');
    console.log(request.body);
    userRepository.saveUser(request.body);
    response.send({success: true});
});

module.exports = router;