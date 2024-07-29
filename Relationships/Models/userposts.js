// Models/userposts.js
const mongoose = require('mongoose');
const { add } = require('nodemon/lib/rules');
async function main(){
    await mongoose.connect('mongodb://localhost:27017/relationDemo');
}
main().catch(err => console.log(err));
const postSchema = new mongoose.Schema({
    title: String,
    likes: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
const userSchema = new mongoose.Schema({
    username:String,
    age: Number
});
const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

const findPosts = async () => {
const post = await Post.find().populate('user','age');
console.log(post);
}

findPosts();