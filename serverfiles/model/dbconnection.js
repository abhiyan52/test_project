var exports = module.exports;
const sqlite3 = require('sqlite3').verbose();

exports.connect = ()=>{
    let db = new sqlite3.Database('./serverfiles/model/users.db',function(err){
        if(err)
            throw err;
       
        });
    
    return db;
}