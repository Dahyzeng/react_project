let express = require('express');
let router = express.Router();
let userRepository = require('./../repository/userRepository');

router.get('/login', function(request, response) {
    // const user = userRepository.login(request.param('username'));
    // console.log(user);
    response.send(JSON.stringify({email: '11@qq.com', name: 'dahy'}));
});

router.get('/save', function(request, response) {
    userRepository.saveUser();
    response.send('ok');
});

module.exports = router;