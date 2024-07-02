// index.js
const mongoose = require('mongoose');

async function main(){
await mongoose.connect('mongodb://127.0.0.1:27017/test'); // database name
}

main().then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error(err));

const userSchema = new mongoose.Schema({ // schema for user table
    name:String,
    email:String,
    age:Number
});
const July_db = mongoose.model('July_db',userSchema);
July_db.findOneAndDelete({age:9}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
}
);