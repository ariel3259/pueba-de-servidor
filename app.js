const { Console } = require('console');
const mysql=require('mysql');
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb"
});
con.connect(err=>{
    if(err)throw err;
    console.log("Conected");
    var id=con.query("select id from users where name='A'",(err)=>{
        if(err)throw err;
        console.log("consulta sql");
    });

})

