const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post('/',(req,res)=>{
    const {q} = req.bd;
    res.send(`your search items is : ${q}`);
});


app.get('*',(req,res)=>{
    res.send('page exist nhi krta bhdve');
});t