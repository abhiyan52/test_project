var exports = module.exports;
var connectToDb = require('../model/dbconnection');
var authentication = require('../controllers/authentication');
const NOT_FOUND=404,SERVER_ERROR=500,SUCCESS=200,UNPROCESSABLE=422;
var codeToMessage={
  404 : 'NOT FOUND',
  500 : 'INTERNAL SERVER ERROR',
  200 :'SUCCESS',
  422:'NO SUCH ROUTE TO PROCESS',
  401 : 'BAD REQUEST'
}

exports.authenticateUser=(req,res)=>{
  var username=req.body.username;
  var password = req.body.password;
  var authenticationPromise = authentication.authenticate(username,password);
   authenticationPromise.then((response)=>{
      res.send(response);
   });
}

exports.getSingle = (req,res)=>{
 
 
        let response = {};
        response.result=[];
        var connection= connectToDb.connect();
        var id = parseInt(req.params.id);
        connection.get('SELECT * from users where uid=?',[id],(err,row)=>{
          if(err)
          {
            response.error=err.message;
            response.statusCode=SERVER_ERROR;
            response.status=codeToMessage[SERVER_ERROR];
          }
          else
          {
            response.error=null;
            if (row==null)
            {
              response.statusCode=NOT_FOUND;
              response.status=codeToMessage[NOT_FOUND];
            }
           else
           {
             response.result.push(row);
             response.statusCode=SUCCESS;
             response.status=codeToMessage[SUCCESS];
           }      
          }
         res.send(response);
        });
     
       connection.close();
}
exports.getUser = (req,res)=>{


    var connection = connectToDb.connect();
    var type= parseInt(req.params.type);
    var value = req.params.name;
    let response = {};
    response.result=[];
    var sql ="";
    var params =[];
    if(type===0)
    {
      sql = `select u.uid,u.firstname,u.lastname,u.username,u.role,u.email,u.cdate from users u`;
      params=[];
     
      
    }
    else if(type==1)
    {
      sql=`select u.uid,u.firstname,u.lastname,u.username,u.role,u.email,u.cdate from users u,ADMINUSER a WHERE a.UID=u.UID and a.AID=?`;
      params=[value];
     
  
    }
    else if(type==2)
    {
      sql=`select u.uid,u.firstname,u.lastname,u.username,u.role,u.email,u.cdate from users u,ADMINSUPER a WHERE a.AID=u.UID and a.SID=?`;
      params=[value];
    }
    else
    {
      response.statusCode=UNPROCESSABLE;
      response.statusCode=codeToMessage[UNPROCESSABLE];
      res.send(response);
    }
   
     var promise = new Promise((resolve,reject)=>{
        connection.all(sql,params,(err, row) => {
          if (err) {
            response.statusCode=SERVER_ERROR;
            response.error=err.message;
            response.status=codeToMessage[SERVER_ERROR];
          }
          else
          {
            response.error=null;
            response.result=row;
            if(response.result.length==0)
            {
              response.statusCode=NOT_FOUND;
              response.status=codeToMessage[NOT_FOUND];
            }
            else
            {
              response.statusCode=SUCCESS;
              response.status=codeToMessage[SUCCESS];
            }
          }
         
          
         resolve(response);
       });
      
      });
     promise.then((result)=>{
       res.send(result);
     });
     connection.close();
  
 }

  
exports.addUser = function(req,res){
  
       
        
          var aid=req.body.aid;
          var sid=req.body.sid;
          var connection = connectToDb.connect();
         
          var insertSQL= ` INSERT INTO USERS (firstname,lastname,username,password,role,email,cdate) VALUES(?,?,?,?,?,?,?)`;
          connection.run(insertSQL,[req.body.firstname,req.body.lastname,req.body.username,authentication.encrypt(req.body.password),req.body.role,req.body.email,new Date().toDateString()],(result,err)=>{

            if(err)
                 {
                  res.send(generateResponse(500,[],err.message));
                 }
                 else
                 {
                       connection.get('select * from users order by uid desc limit 1',(err,row)=>{
                       if(err)
                       {
                      res.send(generateResponse(500,[],err.message));
                       }
                       
                       else
                       {
                          
                         var id = sid==null?aid:sid;
                         var sql = sid==null?"INSERT INTO ADMINUSER values(?,?)" :"INSERT INTO ADMINSUPER values(?,?)";    
                         var uid = row.UID;
                       
                         connection.run(sql,[id,uid],(err)=>{
                          if(err) 
                          res.send(generateResponse(500,[],err.message));
                          else
                          res.send(generateResponse(200,[],null));
                         });
                       }
                   });
                 
                 }
             });
             
}
       
 exports.validUserNameMiddleWare =(req,res,next)=>{
  var connection = connectToDb.connect();
  var username = req.body.username;
  connection.all('SELECT username from users',(err,row)=>{

    let flag = row.map(value=>value.username).indexOf(username)==-1?true:false;
    if(flag==true)
    {
      next();
    }
    else
    {
    
      res.send (generateResponse(401,[],null));
    }
       
  });
  
 }  


exports.modify = (req,res)=>{
  
  
      var connection = connectToDb.connect();
      var type=parseInt(req.body.type);
      var id = req.body.id;
      var response={};
      var elementQuery = `SELECT * from users where UID=?`;
    
      var promise= new Promise((resolve,reject)=>{
        connection.get(elementQuery,[id],(err,row)=>{
         
          if(row == undefined)
          {
          resolve(generateResponse(NOT_FOUND,[],null));
          }
          if(type==0 && row!=undefined)
          {
            
             connection.run(`DELETE FROM USERS WHERE UID=?`,[id],(err)=>{
            
              if(err)
                response.error=err.message;
              });
              var tail = row.role=='admin'?"DELETE FROM ADMINSUPER WHERE AID=?":"DELETE FROM ADMINUSER WHERE UID=?";
              connection.run(tail,[id],(err)=>{
               
                if(err)
                {
                  resolve(generateResponse(SERVER_ERROR,[],err.message));
                 
                }
                else
                {
                  resolve(generateResponse(SUCCESS,[],null,{code:SUCCESS,message:"UPDATION SUCESSFUL"}));
                }
                
              });
             
          } 
          else if(type==1 && row!=undefined)
          {
            for(const tuple in row)
            {
              if(req.body.hasOwnProperty(tuple))
              {
                if(tuple=='password')
                row[tuple]=authentication.encrypt(req.body[tuple]);
                else
                row[tuple] = req.body[tuple];
              }
            }
            connection.run(`DELETE FROM USERS WHERE UID=?`,[id],(err)=>{
              if(err)
              resolve(generateResponse(SERVER_ERROR,[],err.message));
               });
            
          connection.run(`INSERT INTO USERS VALUES (?,?,?,?,?,?,?,?)`,[id,row.firstname,row.lastname,row.username,row.password,row.role,row.email,row.cdate],(err)=>{
            if(err)
            resolve(generateResponse(SERVER_ERROR,[],err.message));
           else
            resolve(generateResponse(SUCCESS,[],null,{code:SUCCESS,message:"UPDATION SUCESSFUL"}));
          });
          }
       });
    });
       promise.then((response)=>{
        res.json(response);
       });
    
}



function generateResponse(statusCode,result=[],error,servermessage={})
{
    response = {
           'statusCode' : statusCode,
           'status' : codeToMessage[statusCode],
           'error' :error,
           'result' : result,
           'servermessage':servermessage      
    }
    return response;
}









  