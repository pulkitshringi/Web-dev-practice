// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');

router.get('/signup',(req,res)=>{
    res.render('users/signup');
});

router.post('/signup',wrapAsync(async (req,res)=>{
    try{
    const {email,username,password} = req.body;
    const user = new User({email,username});
    const registeredUser = await User.register(user,password);
    req.flash('success','Welcome to Wanderlust');
    res.redirect('/listings');
    } catch(e){
        req.flash('error',e.message);
        res.redirect('/signup');
    }
}));
router.get('/login',(req,res)=>{
    res.render('users/login');
});

router.post('/login',passport.authenticate('local',{failureFlash:true,failureRedirect:'/login'}),wrapAsync(async (req,res)=>{
    req.flash('success','Welcome back :)');
    res.redirect('/listings');
}));

router.get('/logout',(req,res,next)=>{
   req.logout((err)=>{
    if(err){
        return next(err);
    }
    req.flash('success','You have successfully logged out');
    res.redirect('/listings');
   })
});

module.exports = router;