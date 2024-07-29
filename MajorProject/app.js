// app.js
const express = require ('express');
const Review = require('./models/review');
const {listingSchema,reviewSchema} =require('./schema');
const mongoose = require('mongoose');
const ExpressError = require('./utils/expressError');
const wrapAsync = require('./utils/wrapAsync');
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
function validateListing(req,res,next){
    let result = listingSchema.validate(req.body,{ abortEarly: false });
    if(result.error){
        throw new ExpressError(400,result.error.details.map(val=>val.message).join(','));
    }
    next();
}
function validateReview(req,res,next){
    let result = reviewSchema.validate(req.body,{ abortEarly: false });
    if(result.error){
        throw new ExpressError(400,result.error.details.map(val=>val.message).join(','));
    }
    next();
}
app.get ('/', (req, res) => {
    res.send ('Hello Wanderlust :)');
});
// listing route
app.get('/listings',wrapAsync(async (req,res)=>{
    const listings = await Listing.find({});
    res.render("listings/index",{listings});
}))
// new listing route
app.get('/listings/new',(req,res)=>{
    res.render("listings/new");
});
// show route
app.get('/listings/:id',wrapAsync(async (req,res)=>{
 const {id} = req.params;
    const listing = await Listing.findById(id).populate('reviews');
    res.render("listings/show",{listing});
}));
// new listing route
app.post('/listings',validateListing,wrapAsync(async (req,res,next)=>{
const {listing} = req.body;
const listing1 = new Listing(listing);
await listing1.save();
res.redirect('/listings'); 
}));

// update route
app.get('/listings/:id/edit',wrapAsync(async (req,res)=>{
    const {id} = req.params;
    const listing = await Listing.findById(id);
    res.render(`listings/edit`,{listing});
}));
app.put('/listings/:id',validateListing,wrapAsync(async (req,res)=>{
const {id} = req.params;
await Listing.findByIdAndUpdate(id,{...req.body.listing});
res.redirect(`/listings/${id}`);
}));
// delete route
app.delete('/listings/:id',wrapAsync(async (req,res)=>{
    const {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect('/listings');
}))
// submit review route
app.post('/listings/:id/reviews',validateReview,wrapAsync(async (req,res)=>{
    const {id} = req.params;
    const listing = await Listing.findById(id);
    const review = new Review(req.body.review);
    listing.reviews.push(review);
    await review.save();
    await listing.save();
    console.log("Submitted review");
    res.redirect(`/listings/${id}`);
}));
// delete review route 
app.delete('/listings/:id/reviews/:reviewId',wrapAsync(async(req,res)=>{
    const {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}))

app.all('*',(req,res,next)=>{
    next(new ExpressError(404,'Page Not Found'));
});
// error handling
app.use((err,req,res,next)=>{
    const {statusCode=500,message="Something went wrong"} = err;
    res.status(statusCode).render('listings/error',{err});
});

