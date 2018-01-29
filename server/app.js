let express = require('express');
let ejs = require('ejs');
let app = express();
let bodyParser = require('body-parser');
const userRouter = require('./routes/user');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use(express.static('public'));
app.use('/user', userRouter);
app.listen(8070);