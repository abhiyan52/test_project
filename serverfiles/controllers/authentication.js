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

var exports = module.exports;
function addToken(id,token)
{
  connection.run("DELETE FROM AUTHENTICATION WHERE clientId=?",[id],(err)=>{
    connection.run('INSERT INTO AUTHENTICATION VALUES (?,?,?)',[id,token,Date.now()],(err)=>{
      if(err)
      console.log(err);
    });
  });
}
function ConvertToKey(string)
{
  return string.toLowerCase()
     .split('')
     .map((value)=> value.charCodeAt(0))
     .reduce((accumulator,value)=> accumulator+value)*Date.now()
     *Math.floor(Math.random()*1000);
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
          console.log(cryptr.decrypt(row.password));
          console.log(password);
          if(cryptr.decrypt(row.password)==password)
          {
           
            response.statusCode=SUCCESS;
            response.status=codeToMessage[SUCCESS];
            response.token=ConvertToKey(username);
            addToken(row.UID,response.token);
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
exports.checkKey=(id,key)=>
{
 return new Promise((reslove,reject)=>{
    connection.get('SELECT clientKey from authentication where clientId=?',[id],(err,row)=>{
    if(err)
    reject(err.message);
    else
    {
       reslove(row!==null?(row.clientKey==key?true:false):false);
    }  
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
