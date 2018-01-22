let express = require('express');
let ejs = require('ejs');
let app = express();
const userRouter = require('./routes/user');
const bodyParser = require('body-parser');

app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type: 'application/*+json'}));
app.use('/user', userRouter);
app.listen(8080);