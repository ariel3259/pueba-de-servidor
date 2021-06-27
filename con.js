const mysql=require('mysql');

const con=mysql.createConnection ( {
    hostname:"localhost",
    user:"root",
    password:"",
    database:"usuarios"
});
module.exports=con;
