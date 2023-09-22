let form = document.querySelector("form");
let ul = document.querySelector("ul");
form.addEventListener("submit",(ev)=>{
    ev.preventDefault();
    let inp = document.querySelector("input");
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText="Delete Task";
    btn.type="button";
    li.innerText=`${inp.value} `;
    if(li.innerText!=" "){
    li.appendChild(btn);
    ul.appendChild(li);
    }
    inp.value=""; // To reset input value :)
});
ul.addEventListener("click",(ev)=>{
    if(ev.target.nodeName=="BUTTON"){
    let deltask = ev.target.parentElement;
    deltask.remove();
    }
});