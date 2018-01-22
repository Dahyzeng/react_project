let express = require('express');
let ejs = require('ejs');
let app = express();
const userRouter = require('./routes/user');

app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.static('public'));
app.use('/user', userRouter);
app.listen(8080);