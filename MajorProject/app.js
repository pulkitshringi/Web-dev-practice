// app.js
const express = require ('express');
const mongoose = require('mongoose');
const Listing = require ('./models/listings');
const app = express ();
app.use (express.urlencoded ({extended: true}));
const path = require ('path');
app.set ('view engine', 'ejs');

const URL = 'mongodb://127.0.0.1:27017/wanderlust';
async function main(){
    await mongoose.connect(URL);
}
main().then(()=>{console.log("Connected to MongoDB")}).catch((err)=>{console.log("Error connecting to MongoDB")});
app.listen (8080, () => {
    console.log ('Server is running on port 8080');
});
app.get ('/', (req, res) => {
    res.send ('Hello Wanderlust :)');
});
app.get('/listings',async (req,res)=>{
    const listings = await Listing.find({});
    res.render("listings/index",{listings});
})
app.get('/listings/new',(req,res)=>{
    res.render("listings/new");
});
app.get('/listings/:id',async (req,res)=>{
 const {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show",{listing});
});
app.post('/listings',async (req,res)=>{
const {listing} = req.body;
const listing1 = new Listing(listing);
await listing1.save();
res.redirect('/listings');
});