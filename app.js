const express=require('express');

const app= express();


app.get("/",(req,res)=>res.send(`
<meta charset="UTF-8">
<title>Primera vez con js</title>
<link  href="style.css" rel="stylesheet" type="css/text">
<h1>Caja 1</h1>
`))
app.listen("3000",err=>{
if(err) throw err;
console.log("Página funcional");
});

/*Como conectarse a mysql y  realizar peticiones
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb"
});
const mysql=require('mysql');
con.connect(err=>{
    if(err)throw err;
    console.log("Conected");
    var id=con.query("peticion sql",(err)=>{
        if(err)throw err;
        console.log("peticion cumplida");
    });

})
*/
