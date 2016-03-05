var express = require('express');
var ROUTES = require('./routes');

var app = express();
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);

//for (var ii in ROUTES) {
//    app.get(ROUTES[ii].path, ROUTES[ii].fn);
//}

app.get('/', function(request, response) {
    var data = fs.readFileSync("homepage.ejs").toString();
    response.send(data);
});

app.listen(port, function() {
    console.log("listening on " + port);
}



