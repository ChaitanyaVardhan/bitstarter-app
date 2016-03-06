var express = require('express');
var path = require('path');
var ROUTES = require('./routes');

var app = express();
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.favicon(path.join(__dirname,'public/img/favicon.ico')));
//app.use(express.logger("dev"));

for (var ii in ROUTES) {
    app.get(ROUTES[ii].path, ROUTES[ii].fn);
}

//app.get('/', function(request, response) {
//    var data = fs.readFileSync("views/homepage.ejs").toString();
//    response.send(data);
//});

//var port = process.env.port || 8080;
app.listen(app.get('port'), function() {
    console.log("listening on " + app.get('port'));
});



