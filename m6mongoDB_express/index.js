// index.js
const mongoose = require('mongoose');
const expressError = require('./expressError');
const methodOverride = require('method-override');
const express = require('express');
const path = require('path');
const Chat = require('./models/chat');
const { nextTick } = require('process');
const app = express();
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}
main().then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error(err);
}); 

const port = 3000;


app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});
 function wrapAsync(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>{next(err)});
    }
}
app.get('/',wrapAsync((req, res,next) => {
    res.redirect('/chats')
  }));
app.get("/chats",wrapAsync( async (req,res,next) => {
  
    const chats = await Chat.find();
    res.render("chats.ejs",{chats});
}));
app.get("/chats/new",wrapAsync(async (req,res,next) => {
    res.render("new.ejs");
   
}));
app.post("/chats",wrapAsync(async(req,res,next)=>{
  
    const {from,to,message} = req.body;
     chat1 =  new Chat(
        {
        from:from,
        to:to,
        message:message,
        created_at: new Date()
})
     await chat1.save()
    res.redirect("/chats");

}));
app.get("/chats/:id/edit",wrapAsync(async (req,res,next) => {
   
    const {id} = req.params;
    const chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
 }));

app.get("/chats/:id", wrapAsync(async (req,res,next) => {
  
    const {id} = req.params;
    const chat = await Chat.findById(id);
    if(!chat){
        return next(new expressError(404,"Chat not found"));
    }
    res.render("show.ejs",{chat});

}));

app.put("/chats/:id",wrapAsync(async (req,res,next)=>{
  
    const {id} = req.params;
    const {message} = req.body;
   await Chat.findByIdAndUpdate(id,{message:message})
    res.redirect("/chats");
   
}))
app.delete("/chats/:id",wrapAsync(async (req,res,next)=>{
   
    const {id} = req.params;
   await Chat.findByIdAndDelete(id,{runValidators:true,new:true}).then((data) => {
        console.log('Data deleted',data);
    }).catch(err => {
        console.error(err);
    });
    res.redirect("/chats");
}));
function ValidationError(err){
    return new expressError(400,err.message);
}
app.use((err,req,res,next)=>{
    console.log(err.name);
   console.dir(err);
    next(err);
})
app.use((err,req,res,next) => {
    const {status=500,message="This ID doesn't exist"} = err;
    res.status(status).send(message);
});