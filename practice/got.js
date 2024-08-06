const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 
app.get('/', async (req, res) => {
    const data = await June.find();
    res.send(data[0].name);
}); 

const main = async () => {
    await mongoose.connect('mongodb://localhost:27017/june');
};

main()
    .then(() => console.log("Connection Established."))
    .catch(err => console.error("Connection failed:", err));

const juneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

const June = mongoose.model('June', juneSchema);

const june1 = new June({
    name: "pooki",
    age:"59"
});
june1.save().then((data)=>{console.log("data saved.",data)}).catch((err)=>{console.log("error occured.",err)});
