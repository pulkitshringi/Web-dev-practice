const express = require('express');
const app = express();
const path = require("path");
app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");
app.listen(3000,()=>{
    console.log("We are listening biich");
});
app.get('/first/:id',(req,res)=>{
    let {id} = req.params;
    res.render('home.ejs',{id});
})
