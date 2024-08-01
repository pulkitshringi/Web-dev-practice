// routes/review.js
const express = require('express');
const router = express.Router({mergeParams:true});
const Review = require('../models/review');
const Listing = require('../models/listings'); // required because we need to update the listing with the review
const {reviewSchema} = require('../schema');
const wrapAsync = require('../utils/wrapAsync');
const ExpressError = require('../utils/expressError');
const isLoggedIn = require('../middleware');

function validateReview(req,res,next){
    let result = reviewSchema.validate(req.body,{ abortEarly: false });
    if(result.error){
        throw new ExpressError(400,result.error.details.map(val=>val.message).join(','));
    }
    next();
}

// submit review route
router.post('/',isLoggedIn,validateReview,wrapAsync(async (req,res)=>{
    const {id} = req.params;
    const listing = await Listing.findById(id);
    const review = new Review(req.body.review);
    listing.reviews.push(review);
    await review.save();
    await listing.save();
    req.flash('success','Successfully created new review');
    res.redirect(`/listings/${id}`);
}));
// delete review route 
router.delete('/:reviewId',isLoggedIn,wrapAsync(async(req,res)=>{
    const {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash('success','Successfully deleted review');
    res.redirect(`/listings/${id}`);
}))
module.exports = router;