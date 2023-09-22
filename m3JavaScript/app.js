let url = "https://icanhazdadjoke.com/";
let p = document.querySelector("p");
async function facts(){
    try{
        const gg = {headers : {
            Accept : "application/json"
        }}
    let res = await axios.get(url,gg);
        p.innerText= res.data.joke;
    }
    catch{
        p.innerText="No Fact Found";
    }
}
let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    facts();
})