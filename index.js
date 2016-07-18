/**
 * Created by Юрий on 18.07.2016.
 */
var express = require('express');
var path = require('path');
var app = express();

app.use('/', express.static(path.resolve(__dirname, 'public')));

app.listen(3000, function () {
   console.log('Server was started at port 3000');
});