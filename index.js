/**
 * Created by Юрий on 18.07.2016.
 */
var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(app.get('port'), function () {
    console.log('Server was started at port ' + app.get('port'));
});