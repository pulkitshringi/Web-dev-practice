// app.js
const express = require('express');
const expressError = require('./expressError');
const app = express();
const port = 3000;

app.listen (port, () => {
    console.log(`Server is running on port ${port}`);
    });

app.get("/admin",(req,res)=>{
    throw new expressError(403,"You are not an admin");
});
app.use((err,req,res,next)=>{
    const {status=500,message="Something went wrong"} = err;
    res.status(status).send(message);
});