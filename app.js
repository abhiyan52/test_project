var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var getUsers= require('./serverfiles/controllers/crudRoutes.js');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended :true}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });
app.get('/users/:type/:name',getUsers.getUser);
app.get('/user/:id',getUsers.getSingle);
app.post('/users',getUsers.addUser);
app.post('/modifyUser',getUsers.modify);
app.get('/*', function(req, res) {
    res.json({
        statusCode:422,
        status:'INVALID ROUTE FOR PROCESS'
    });
});
app.post('/authorize',getUsers.authenticateUser);
app.listen(3000);