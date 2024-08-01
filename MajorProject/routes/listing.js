// routes/listing.js
const express = require('express');
const router = express.Router();
const {listingSchema} = require('../schema.js');
const wrapAsync = require('../utils/wrapAsync');
const ExpressError = require('../utils/expressError');
const Listing = require ('../models/listings');
const isLoggedIn = require('../middleware.js');
function validateListing(req,res,next){
    let result = listingSchema.validate(req.body,{ abortEarly: false });
    if(result.error){
        throw new ExpressError(400,result.error.details.map(val=>val.message).join(','));
    }
    next();
}

// listing route
router.get('/',wrapAsync(async (req,res)=>{
    const listings = await Listing.find({});
    res.render("listings/index",{listings});
}))
// new listing route
router.get('/new',isLoggedIn,(req,res)=>{
    res.render("listings/new");
});
// show route
router.get('/:id',wrapAsync(async (req,res)=>{
    try{
 const {id} = req.params;
    const listing = await Listing.findById(id).populate('reviews');
    if(!listing){
        req.flash('error','Listing does not exist');
        res.redirect('/listings');
    }
    res.render("listings/show",{listing});
} catch(e){
    req.flash('error','Listing does not exist');
    res.redirect('/listings');
}
}));
// new listing route
router.post('/',validateListing,wrapAsync(async (req,res,next)=>{
const {listing} = req.body;
const listing1 = new Listing(listing);
await listing1.save();
req.flash('success','Successfully created new listing');
res.redirect('/listings'); 
}));

// update route
router.get('/:id/edit',isLoggedIn,wrapAsync(async (req,res)=>{
    try{
    const {id} = req.params;``
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash('error','Listing does not exist');
        res.redirect('/listings');
    }
    res.render(`listings/edit`,{listing});
} catch(e){
    req.flash('error','Listing does not exist');
    res.redirect('/listings');
}
}));
router.put('/:id',validateListing,wrapAsync(async (req,res)=>{
const {id} = req.params;
await Listing.findByIdAndUpdate(id,{...req.body.listing});
req.flash('success','Successfully updated listing');
res.redirect(`/listings/${id}`);
}));
// delete route
router.delete('/:id',isLoggedIn,wrapAsync(async (req,res)=>{
    
    const {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash('success','Successfully deleted listing');
    res.redirect('/listings');
}))
module.exports = router;