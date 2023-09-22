let url = "http://universities.hipolabs.com/search?name=";
let inp = document.querySelector("#country");
let state_inp = document.querySelector("#state");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
async function College(){
    try{
        let country = inp.value;
        let state = state_inp.value;
    let res = await axios.get(url+state+"&country="+country);
    let ress = res.data;
    ul.innerText="";
   for(i of ress){
    let li = document.createElement("li");
    li.innerText = `${i.name}`;
    ul.appendChild(li);
   }
}
    catch(err){
        ul.innerText=`Error is : ${err}`;
    }
}
btn.addEventListener("click",()=>{
    College();
})

