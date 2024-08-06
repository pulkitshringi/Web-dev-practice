// app.js
const express = require ('express');
 const listingRouter = require('./routes/listing');
 const reviewRouter = require('./routes/review');
 const userRouter = require('./routes/user');
const mongoose = require('mongoose');
const ExpressError = require('./utils/expressError');
const methodOverride = require('method-override');
const ejsmate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const User = require('./models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const app = express ();
app.use(methodOverride('_method'));
app.use (express.urlencoded ({extended: true}));
const path = require ('path');
app.set ('view engine', 'ejs');
app.engine('ejs',ejsmate);
app.use(express.static(path.join(__dirname,'public')));

const sessionOptions = {secret:'projectsecret', resave: false, saveUninitialized: true,
    cookie:{httpOnly:true,
            expires:Date.now()+ 7*24*60*60*1000,maxAge:7*24*60*60*1000
        }
};
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); // passport will use local authentication method in user model
passport.serializeUser(User.serializeUser()); // serialize user into session
passport.deserializeUser(User.deserializeUser()); // deserialize user from session

app.use(flash());
app.use((req,res,next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
});


const URL = 'mongodb://127.0.0.1:27017/wanderlust';
async function main(){
    await mongoose.connect(URL);
}
main().then(()=>{console.log("Connected to MongoDB")}).catch((err)=>{console.log("Error connecting to MongoDB")});
app.listen (8080, () => {
    console.log ('Server is running on port 8080');
});

app.get('/demouser',async(req,res)=>{
    const newUser = new User(
        {
            email:'pulkitshringi@yahoo.com',
            username:'pulkit'
        });
    const user = await User.register(newUser,'maths@123');
    res.send(user);
});


app.get ('/', (req, res) => {
    res.send ('Hello Wanderlust :)');
});
app.use('/listings',listingRouter);
app.use('/listings/:id/reviews',reviewRouter);
app.use('/',userRouter);

app.all('*',(req,res,next)=>{
    next(new ExpressError(404,'Page Not Found'));
});
// error handling
app.use((err,req,res,next)=>{
    const {statusCode=500,message="Something went wrong"} = err;
    res.status(statusCode).render('listings/error',{err});
});

