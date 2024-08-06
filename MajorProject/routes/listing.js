// routes/listing.js
const express = require('express');
const router = express.Router();
const {listingSchema} = require('../schema.js');
const wrapAsync = require('../utils/wrapAsync');
const ExpressError = require('../utils/expressError');
const Listing = require ('../models/listings');
const {isLoggedIn,isOwner,validateListing} = require('../middleware.js');
const listingController = require('../controllers/listing');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// listing route && new listing route
router.route('/').get(wrapAsync(listingController.index))
.post(validateListing,upload.single('listing[image][url]'),wrapAsync(listingController.newListingPOST));

// new listing route
router.get('/new',isLoggedIn,listingController.newListing);

// show route && update route && delete route
router.route('/:id')
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,validateListing,wrapAsync(listingController.editListingPUT))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

// update route
router.get('/:id/edit',isLoggedIn,isOwner,wrapAsync(listingController.editListing));
     
module.exports = router;