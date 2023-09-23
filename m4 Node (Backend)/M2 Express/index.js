const express = require('express');
const app = express();
let port = 3000;
app.listen(port , ()=>{
    console.log(`You are listening from port ${port}`);
});

app.get("/search",(req,res)=>{
    let {q1,q2} = req.query;
    if(!q1){
        res.send(`Query Empty`);
    }
    res.send(`Result displayed for query ${q1} and ${q2}`);
});
app.get("*",(req,res)=>{
    res.send("Page is invalid");
})