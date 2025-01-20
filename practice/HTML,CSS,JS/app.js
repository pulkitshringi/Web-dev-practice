let func = async()=>{
    let res = await fetch("https://catfact.ninja/fact");
    let fact = await res.json();
    console.log(fact.fact);
}
func();