// Models/users.js
const mongoose = require('mongoose');
async function main(){
    await mongoose.connect('mongodb://localhost:27017/relationDemo');
}
main().catch(err => console.log(err));

const userSchema = new mongoose.Schema({
username : String,
addresses : [
    {
        _id: false,
        location: String,
        city: String,
    }
]
});
const User = mongoose.model('User', userSchema);

const addUsers = async () => {
    const user = new User({
        username: 'pookie',
        addresses: [
            { location: 'Street 1', city: 'City 1' },
            { location: 'Street 2', city: 'City 2' }
        ]
    });
    user.addresses.push({ location: 'Street 3', city: 'City 3' }); // pushing another address
   const res =  await user.save();
    console.log(res);
}
addUsers();