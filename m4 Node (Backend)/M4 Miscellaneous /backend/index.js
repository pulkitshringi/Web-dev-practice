const express = require("express");
const app = express();
let port = 3000;
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.listen(3000,()=>{
    console.log("we are listening");
})
app.get("/register",(req,res)=>{
    let {username,password} = req.query;
    res.send(`standard GET response where your username is ${username} and password is ${password}`);
})
app.post("/register",(req,res)=>{
    let {username ,password} = req.body;
    res.send(`standard POST response where your username is ${username} and password is ${password}`);
})