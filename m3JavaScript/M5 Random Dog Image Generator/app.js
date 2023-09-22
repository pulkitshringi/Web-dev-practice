let url = "https://dog.ceo/api/breeds/image/random";
let img = document.querySelector("img");
async function imgg(){
    try{
    let res = await axios.get(url);
    let src =  res.data.message;
    img.setAttribute("src",src);
    }
    catch{
        img.setAttribute("src","//");
        img.setAttribute("alt","Random Dog Image");
    }
}
let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    imgg();
})