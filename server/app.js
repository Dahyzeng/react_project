let express = require('express');
let ejs = require('ejs');
let app = express();
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.static('public'));

app.listen(8080);