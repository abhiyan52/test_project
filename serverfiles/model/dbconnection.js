var exports = module.exports;
const sqlite3 = require('sqlite3').verbose();
var path = require('path');

exports.connect = ()=>{
    let db = new sqlite3.Database('./serverfiles/model/users.db',function(err){
        if(err){
            console.error(err.message);
        }
        else
         console.log("CONNECTION SUCESSFUL");
     });
    
    return db;
}