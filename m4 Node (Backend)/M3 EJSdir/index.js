const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const instaDatabase = require("./data.json");
const e = require("express");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.listen(port,()=>{
    console.log("Server is on");
});
app.get("/ig/:username",(req,res)=>{
   let {username} = req.params;
   if(instaDatabase[username]){
   res.render("instagram.ejs",{data:instaDatabase[username]});
   }
   else
   res.render("error.ejs",{username});
})