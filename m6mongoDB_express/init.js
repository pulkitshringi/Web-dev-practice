// init.js
const mongoose = require('mongoose');

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
main().then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error(err);
}); 

const Chat = require('./models/chat');
const allChats = [
    {
        from:"check",
        to:"checksent",
        message:"checkmsg",
        created_at: new Date()
    }
    // {
    //     from:"pooki",
    //     to:"mitu",
    //     message:"loveyaaa",
    //     created_at: new Date()
    // },
    // {
    //     from:"mitu",
    //     to:"pooki",
    //     message:"loveyaaa too",
    //     created_at: new Date()
    // },
    // {
    //     from: "dodo",
    //     to: "pooki",
    //     message: "hehe",
    //     created_at: new Date()
    // },
    // {
    //     from: "boby",
    //     to: "harry",
    //     message: "hehe too",
    //     created_at: new Date()
    // }
]
Chat.insertMany(allChats).then(() => {
    console.log('Data inserted');
}).catch(err => {
    console.error(err);
});