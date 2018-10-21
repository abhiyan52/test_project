var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var getUsers= require('./serverfiles/controllers/crudRoutes.js');
var authentication = require('./serverfiles/controllers/authentication');
var PORT =3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended :true}));
app.use(express.static('./public'));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

app.post('/authorize',getUsers.authenticateUser);

app.use((req,res,next)=>{
  var authenticate = authentication.validateRequest(req.query.id,req.query.token);
    authenticate.then((response)=>{
    if(response.access==true)
    {
      next();
    }
    else
    {
    response.statusCode=401;
    response.status="ACCESS DENIED";
    res.send(response);
    }
    });

});
app.get('/users/:type/:name',getUsers.getUser);
app.get('/user/:id',getUsers.getSingle);
app.post('/users',getUsers.validUserNameMiddleWare,getUsers.addUser);
app.post('/modifyUser',getUsers.modify);
app.get('/*', function(req, res) {
    res.json({
        statusCode:422,
        status:'INVALID ROUTE FOR PROCESS'
    });
});
app.post('/authorize',getUsers.authenticateUser);
app.listen(PORT,(err)=>{
    if(err)
    throw err;
    else
    console.log(`APP RUNNING AT ${PORT} visit @ http://localhost:${PORT}`);
});