// controllers/listing.js
const Listing = require ('../models/listings');

module.exports.index = async (req,res)=>{
    const listings = await Listing.find({});
    res.render("listings/index",{listings});
}
module.exports.newListing = (req,res)=>{
    res.render("listings/new");
};
module.exports.showListing = async (req,res)=>{
    try{
 const {id} = req.params;
    const listing = await Listing.findById(id).populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    })
    .populate('owner');
        console.log(listing);
    if(!listing){
        req.flash('error','Listing does not exist');
        return res.redirect('/listings');
    }
    res.render("listings/show",{listing});
} catch(e){
    req.flash('error','Listing does not exist');
    return res.redirect('/listings');
}
}
module.exports.newListingPOST = async (req,res,next)=>{
    const {listing} = req.body;
    const listing1 = new Listing(listing);
    listing1.owner = req.user._id; // adding user id from req.user 
    await listing1.save();
    req.flash('success','Successfully created new listing');
    res.redirect('/listings'); 
    }
module.exports.editListing = async (req,res)=>{
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
}
module.exports.editListingPUT = async (req,res)=>{
    const { id } = req.params;  
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash('success','Successfully updated listing');
    res.redirect(`/listings/${id}`);
    }
module.exports.destroyListing = async (req,res)=>{
    
    const {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash('success','Successfully deleted listing');
    res.redirect('/listings');
}