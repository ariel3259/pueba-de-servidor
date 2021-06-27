const express=require('express');

const app= express();


app.listen("3000",err=>{
if(err) throw err;
console.log("Página funcional");
});

const con=require('./con.js');
con.connect(err=>{
if(err) throw err;
    console.log("prueba 1");
    con.query(`
create table pais(
id int not null,
name varchar(50) not null
)engine=innodb
        `,err=>{
    if(err)throw err;
        console.log("paso la segunda tercera");
    })
})
