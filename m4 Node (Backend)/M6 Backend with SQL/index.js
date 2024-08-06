const express = require('express');
const mysql = require('mysql2');
const app = express();
const path = require("path");

const methodOverride = require("method-override");
const { error } = require('console');
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

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
    // show no. of users in home.ejs
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
    //show total users in users.ejs
    app.get("/users",(req,res)=>{
      let q = "SELECT * FROM user";
      try{
        connection.query(q,(err,result)=>{
          if(err) throw err;
          let users = result;
          res.render("users.ejs",{users});
        })
      }
      catch(err){
        console.log(err);
      }
    })
    //form page to change username in edit.ejs
    app.get("/users/:id/edit",(req,res)=>{
      let {id} = req.params;
      try{
        let q = `SELECT * from user WHERE id='${id}' `;
        connection.query(q,(error,result)=>{
          if(error) throw error;
          let user = result[0];
          res.render("edit.ejs",{user});
        })
      }
      catch(err){
        console.log(err);
      }
      })
      // form page redirects to this patch after form is submitted. 
      app.patch("/users/:id",(req,res)=>{
        let {id} = req.params;
        let {password:passconfirm, username:newusername} = req.body;
          let q = `SELECT * FROM user WHERE id='${id}'`;
          try{
          connection.query(q,(error,result)=>{
            if(error)throw error;
            let user = result[0];
            if(user.password===passconfirm){
              let q2 = `UPDATE user SET username='${newusername}' where id='${id}'`;
                connection.query(q2,(error,result)=>{
                  if(error) throw error;
                  console.log(result);
                })
                res.redirect(`/users`);
            }
            else{
              res.send("wrong Password!");
            }
            })
          }
        catch(err){
          console.log(err);
        }
      }
    );
      