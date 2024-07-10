// index.js
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const express = require('express');
const path = require('path');
const Chat = require('./models/chat');
const app = express();
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
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
app.get('/', (req, res) => {
    res.redirect('/chats')
});
app.get("/chats", async (req,res) => {
    const chats = await Chat.find();
    res.render("chats.ejs",{chats});
});
app.get("/chats/new", (req,res) => {
    res.render("new.ejs");
});
app.post("/chats", (req,res)=>{
    const {from,to,message} = req.body;
     chat1 =  new Chat(
        {
        from:from,
        to:to,
        message:message,
        created_at: new Date()
})
     chat1.save().then(() => {
        console.log('Data inserted');
     }).catch(err => { 
        console.error(err);
     });
    res.redirect("/chats");
})
app.get("/chats/:id/edit", async (req,res) => {
    const {id} = req.params;
    const chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});
app.put("/chats/:id", (req,res)=>{
    const {id} = req.params;
    const {message} = req.body;
   Chat.findByIdAndUpdate(id,{message:message}).then(() => {
        console.log('Data updated');
    }).catch(err => {
        console.error(err);
    });
    res.redirect("/chats");

})
app.delete("/chats/:id",(req,res)=>{
    const {id} = req.params;
    Chat.findByIdAndDelete(id,{runValidators:true,new:true}).then((data) => {
        console.log('Data deleted',data);
    }).catch(err => {
        console.error(err);
    });
    res.redirect("/chats");
});
