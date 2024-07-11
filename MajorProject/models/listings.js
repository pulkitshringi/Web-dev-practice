// models/listings.js
const mongoose = require('mongoose');
const ListingSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        url:{
        type:String,
        default:"https://images.unsplash.com/photo-1625505826533-5c80aca7d157?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set:(url)=>{return url===""?"https://images.unsplash.com/photo-1625505826533-5c80aca7d157?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":url},
        },
        filename:String,
    },
    price:Number,
    location:String,
    country:String
});
const Listing = mongoose.model('Listing', ListingSchema);
module.exports = Listing;