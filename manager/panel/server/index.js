var fs = require("fs"),
path = require("path"),
express = require('express'), app = module.exports = express(),
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/../client'));

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

var core = require('./app')(fs),
constroller = require('./controllers')(app, core);

var port = process.env.PORT || 49998;
app.listen(port);