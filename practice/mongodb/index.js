const mongoose = require('mongoose');
const {Schema , model} = mongoose;
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
main()
.then(()=>{
    console.log("We are connected baby ;)");
})
.catch((err)=>{console.log("Bruh we got error : "+ err)});

const petSchema = new Schema({
    name:String,
    Gender:String,
    Age:Number
});
const Pet = model("Pet",petSchema);
const pet1 = new Pet({name:"Sophyyy<3",age:5});
pet1.save()
.than((res)=>{
    console.log("Data Saved :",res);
})
.catch(()=>{
    console.log("error in saving data");
})
// check