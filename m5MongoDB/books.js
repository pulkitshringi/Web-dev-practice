const mongoose = require("mongoose");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon"); 
}
main().then(() => console.log("Connected Successfully. "))
.catch((err) => console.error(err));

const bookSchema = new mongoose.Schema({ 
    title:{
        type:String,
        required:true,
        maxLength:10
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min : [1,"bhai price bahut low hai"]
    } ,
    discount:{
        type:Number,
        default:0
    },
    genre:{
        type:String,
        enum:["fiction","non-fiction"]
    },
    tags:{
        type:[String]
    }
    });
    const Book = mongoose.model("Book",bookSchema);
  Book.findByIdAndUpdate("6683a67e2797cf29e7e49af8",{price:-500},{new:true,runValidators:true}).then((result) => {
    console.log(result);
  }).catch((err) => {
    console.error(err.errors.price.properties.message);
  });

