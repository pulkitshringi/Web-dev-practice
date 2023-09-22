let url = "https://catfact.ninja/fact";
let p = document.querySelector("p");
async function facts(){
    try{
    let res = await axios.get(url);
    p.innerText= await res.data.fact;
    }
    catch{
        p.innerText="No Fact Found";
    }
}
let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    facts();
})