const express = require('express');
const app = express();
let port = 3000;
app.listen(port , ()=>{
    console.log(`You are listening from port ${port}`);
})
// app.use((req,res)=>{
//     console.log("Response generated");
//     res.send({
//         name:"Pulkit",
//         Age:21
//     });
// })

app.post("/" , (req,res)=>{
    res.send("You contacted rooth path");
});
app.post("/search" , (req,res)=>{
    res.send("You contacted search path");
});
app.post("/navigation" , (req,res)=>{
    res.send("You contacted navigation path");
});
app.post("*",(req,res)=>{
    res.send("This page does not exist");
})