// app.js
const express = require ('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Listing = require ('./models/listings');
const ejsmate = require('ejs-mate');
const app = express ();
app.use(methodOverride('_method'));
app.use (express.urlencoded ({extended: true}));
const path = require ('path');
app.set ('view engine', 'ejs');
app.engine('ejs',ejsmate);
app.use(express.static(path.join(__dirname,'public')));
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
// listing route
app.get('/listings',async (req,res)=>{
    const listings = await Listing.find({});
    res.render("listings/index",{listings});
})
// new listing route
app.get('/listings/new',(req,res)=>{
    res.render("listings/new");
});
// show route
app.get('/listings/:id',async (req,res)=>{
 const {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show",{listing});
});
// new listing route
app.post('/listings',async (req,res)=>{
const {listing} = req.body;
const listing1 = new Listing(listing);
await listing1.save();
res.redirect('/listings');
});
// update route
app.get('/listings/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const listing = await Listing.findById(id);
    res.render(`listings/edit`,{listing});
});
app.put('/listings/:id',async (req,res)=>{
const {id} = req.params;
await Listing.findByIdAndUpdate(id,{...req.body.listing});
res.redirect(`/listings/${id}`);
});
// delete route
app.delete('/listings/:id',async (req,res)=>{
    const {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect('/listings');
})