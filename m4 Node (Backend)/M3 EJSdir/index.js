const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.listen(port,()=>{
    console.log("Server is on");
});
app.get("/",(req,res)=>{
    res.render("home.ejs");
})
