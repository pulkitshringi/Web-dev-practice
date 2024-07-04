// index.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
const port = 3000;
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
main().then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error(err);
}); 

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});
app.get('/', (req, res) => {
    res.send('Hello World');
});