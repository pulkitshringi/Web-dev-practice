// index.js
const express = require("express");
const app = express();
const port =3000;
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

const path = require("path");
const { resourceLimits } = require("worker_threads");

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride('_method'));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})
let posts = [{
    id : uuidv4(),
    username : "apnacollege",
    content : "I love coding"
},{
    id :uuidv4(),
    username : "pulkit",
    content : "I love hardwork"
},{
    id : uuidv4(),
    username : "arya",
    content : "I love smartwork"
}]
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})
app.post("/posts",(req,res)=>{
   let {username,content} = req.body;
   let id = uuidv4();
   posts.push({id,username,content}) 
   res.redirect("/posts");
})
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>p.id===id);
    if(post){
    res.render("show.ejs",{post});
    }
    else
    res.send("Your ID does not exist.");
})
app.patch("/posts/:id",(req,res)=>{       
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=>id===p.id);
    post.content=newContent;
    res.redirect(`/posts`);
})
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>p.id===id);
    res.render("edit.ejs",{post});
})
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=>id!==p.id); // filters the posts array which does not have that id.
    res.redirect("/posts");
})
