const express = require('express');
const app = express();
let port = 3000;
app.listen(port , ()=>{
    console.log(`You are listening from port ${port}`);
})