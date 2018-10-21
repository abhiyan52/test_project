const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
var connection = require('../model/dbconnection').connect();
const NOT_FOUND=404,SERVER_ERROR=500,SUCCESS=200,UNPROCESSABLE=422,ACCESS_DENIED=401;
var codeToMessage={
  404 : 'NOT FOUND',
  500 : 'INTERNAL SERVER ERROR',
  200 :'SUCCESS',
  422:'NO SUCH ROUTE TO PROCESS',
  401:'ACCESS DENED INVALID DETAILS'
}
var authenticatedUsers={};
var authenticatedId= [];
var exports = module.exports;
function addToken(id,token)
{
  if(authenticatedId.indexOf(id)==-1)
  {
    authenticatedId.push(id);
    authenticatedUsers[id]=token;
  }
  else
  {
    authenticatedId.splice(authenticatedId.indexOf(id),1);
    authenticatedUsers[id]=token;
  }
  connection.run("DELETE FROM AUTHENTICATION WHERE clientId=?",[id],(err)=>{
    connection.run('INSERT INTO AUTHENTICATION VALUES (?,?,?)',[id,Date.now(),token],(err)=>{
      if(err)
      console.log(err);
    });
  });
}
function ConvertToKey(string)
{
  var now = new Date();

  return cryptr.encrypt(string+now.getMilliseconds);
}
exports.authenticate=(username,password)=>{

var response={};
response.token=null;
return new Promise((reslove,reject)=>{

    connection.get('SELECT * FROM USERS where username=?',[username],(error,row)=>{
    
       if(error)
        {
          console.log(error.message);
        } 
       if(row==null)
        {
          response.statusCode=NOT_FOUND;
          response.status=codeToMessage[NOT_FOUND];
          response.error=null;
         
          reslove(response);
        }
        else
        {
          response.statusCode=SUCCESS;
          response.status=codeToMessage[SUCCESS];
         
         
          if(cryptr.decrypt(row.password)==password)
          {
            response.token=ConvertToKey(username);
            response.userInfo={};
            response.userInfo=row;
            // response.userInfo.id=row.UID;
            // response.userInfo.username=row.username;
            // response .userInfo.firstname=row.firstname;
            // response.userInfo.role=row.role;
            // response.userInfo.lastname=row.lastname;
            addToken(row.UID,response.token);
            response.statusCode=SUCCESS;
            response.status=codeToMessage[SUCCESS];
            response.id=row.UID;
           
          }
          else
          {
            response.statusCode=ACCESS_DENIED;
            response.status=codeToMessage[ACCESS_DENIED];
          }
          reslove(response);
        }
     });

});
}
checkKey=(id,key)=>
{
 

 return new Promise((reslove)=>{

    if(authenticatedId.indexOf(id)!=-1)
    {
   
          reslove(authenticatedUsers[id]==key?true:false); 
    }
    else
    {
      
      connection.get('SELECT clientKey from authentication where clientId=?',[id],(err,row)=>{
        if(err)
        {
          reject(err.message);
          throw err;
        
        }
        
        else
        {
          
          reslove(row!==undefined?(row.clientKey==key?true:false):false);
        }  
     });
    }

});
}
exports.validateRequest= (id,key)=>{
  id=parseInt(id);

  
  return new Promise((resolve,reject)=>{
     var response = checkKey(id,key);
     response.then((value)=>{
      
          resolve(value==true?{access:true}:{access:false});
     }).catch((err)=>{
      
          reslove({access:false});
     });
  });
}

exports.encrypt=(string)=>
{
    return cryptr.encrypt(string);
}
exports.decrypt = (string)=>
{
    return cryptr.decrypt(string);
}
