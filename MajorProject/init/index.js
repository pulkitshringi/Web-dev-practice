// init/index.js
const mongoose = require('mongoose');
const data = require('./data');
const Listing = require('../models/listings');
const URL = 'mongodb://127.0.0.1:27017/wanderlust';
async function main(){
    await mongoose.connect(URL);
}
main().then(()=>{console.log("Connected to MongoDB")}).catch((err)=>{console.log("Error connecting to MongoDB")});
Listing.deleteMany({}).then(()=>{
    Listing.insertMany(data).then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log(err);
    });
}).catch((err)=>{
    console.log(err);
});
