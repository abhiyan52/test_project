var exports = module.exports;
var connectToDb = require('../model/dbconnection');
var authentication = require('../controllers/authentication');
const NOT_FOUND=404,SERVER_ERROR=500,SUCCESS=200,UNPROCESSABLE=422;
var codeToMessage={
  404 : 'NOT FOUND',
  500 : 'INTERNAL SERVER ERROR',
  200 :'SUCCESS',
  422:'NO SUCH ROUTE TO PROCESS'
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
  connection.get('SELECT firstname,lastname,username,role from users where uid=?',[id],(err,row)=>{
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
  connection.close((err)=>{
    if(err)
    throw err
    else
    console.log("SUCESSFULLY CLOSED");
  });
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
      sql = `select u.uid,u.firstname,u.lastname,u.username,u.role from users u`;
      params=[];
      
    }
    else if(type==1)
    {
      sql=`select u.uid,u.firstname,u.lastname,u.username,u.role from users u,ADMINUSER a WHERE a.UID=u.UID and a.AID=?`;
      params=[value];
    }
    else if(type==2)
    {
      sql=`select u.uid,u.firstname,u.lastname,u.username,u.role from users u,ADMINSUPER a WHERE a.AID=u.UID and a.SID=?`;
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
     connection.close((err)=>{
       if(err)
       throw err
       else
       console.log("SUCESSFULLY CLOSED");
     });
}

exports.addUser = function(req,res){
  var response ={};
  var aid=req.body.aid;
  var sid=req.body.sid;
  var connection = connectToDb.connect();
  var insertSQL= ` INSERT INTO USERS (firstname,lastname,username,password,role) VALUES(?,?,?,?,?)`;
  connection.run(insertSQL,[req.body.firstname,req.body.lastname,req.body.username,authentication.encrypt(req.body.password),req.body.role],(result,err)=>{
   
    if(err)
         {
           throw err;
           response.error=err.message;
           response.statusCode=SERVER_ERROR;
           response.status=codeToMessage[SERVER_ERROR];
           res.send(response);
         }
         else
         {
           response.error=null;
           response.statusCode=SUCCESS;
           response.status=codeToMessage[200];
           connection.get('select * from users order by uid desc limit 1',(err,row)=>{
               if(err)
               console.log(err.message);
               else
               {
                  
                 var id = sid==null?aid:sid;
                 var sql = sid==null?"INSERT INTO ADMINUSER values(?,?)" :"INSERT INTO ADMINSUPER values(?,?)";    
                 var uid = row.UID;
                
                 connection.run(sql,[id,uid],(err)=>{
                  if(err) 
                  console.log(err.message);
                  else
                  console.log("WRITE SUCESSFUL");
                 });
               }
           });
           res.send(response);
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
        console.log("UNDEFINED ID");
        response.statusCode=NOT_FOUND;
        response.status=codeToMessage[NOT_FOUND];
        response.error=null;
        resolve(response);
      }
      if(type==0)
      {
         connection.run(`DELETE FROM USERS WHERE UID=?`,[id],(err)=>{
        
          if(err)
            response.error=err.message;
          });
          connection.run(`DELETE FROM ADMINUSER WHERE UID=?`,[id],(err)=>{
           
            if(err)
            {
              response.error=err.message;  
              response.statusCode=SERVER_ERROR;
              response.status=codeToMessage[SERVER_ERROR];
            }
            else
            {
              response.error=null;
              response.statusCode=SUCCESS;
              response.status=codeToMessage[SUCCESS];
            }
            resolve(response);
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
          response.error=err.message;  
          response.statusCode=SERVER_ERROR;
          response.status=codeToMessage[SERVER_ERROR];
        });
        
      connection.run(`INSERT INTO USERS VALUES (?,?,?,?,?,?)`,[id,row.firstname,row.lastname,row.username,row.password,row.role],(err)=>{
        if(err)
        {
          response.error=err.message;  
          response.statusCode=SERVER_ERROR;
          response.status=codeToMessage[SERVER_ERROR];
        }
       else
        {
          response.error=null;
          response.statusCode=SUCCESS;
          response.status=codeToMessage[SUCCESS];
        }
       resolve(response);
        });
      }
   });
});
   promise.then((response)=>{
    res.json(response);
   });
}
