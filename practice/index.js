const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.listen(port,()=>{
    console.log("Server working, listening to 8080")
})
let posts = [{
    username : "apnacollege",
    content : "i love coding"
},
{
    username: "pulkit",
    content: "II love hardwork"
},
{username: "Arya",
content:"I love smartwork"}
];
app.get("/posts",(req,res)=>{
res.render("index.ejs",{posts});    
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/posts",(req,res)=>{
 let {username ,content}= req.body;
 posts.push({username,content});
 res.redirect("/posts");
});
