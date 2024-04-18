const express = require('express');
const mysql = require('mysql2');
const app = express();
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'delta_app',
      password: 'admin@123'
    });
 
    app.listen(8080,()=>{
      console.log("Server is listening to 8080");
    });
    // app.get("/",(req,res)=>{
    //   let q = "SELECT COUNT(*) FROM user";
    //   try{
    //     connection.query(q,(err,result)=>{
    //       if(err) throw err;
    //       res.send(result);
    //     })
    //   }
    //   catch(err){
    //     console.log(err);
    //   }
    // })
    app.get("/",(req,res)=>{
      let q = "SELECT COUNT(*) FROM user";
      try{
      connection.query(q,(err,result)=>{
        if(err) throw err;
        let count = result[0]["COUNT(*)"];
        res.render("home.ejs",{count});
      })
      }
      catch(err){
        console.log("error")
        res.send("There's a error");
      }
    })