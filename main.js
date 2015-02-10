var path         = require('path');
var express      = require('express');
var exphbs       = require('express-handlebars');
var helpers      = require('./helpers');

var app = express();
var hbs = exphbs.create({
        defaultLayout : 'main',
        helpers       : helpers
    });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public/'));

app.get('/', function(req, res){
    res.render('home', {
        active : {active_home : true}
    });
});    

app.listen(3000);