let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let div = document.querySelector(".colordiv");
btn.addEventListener("click",function(){
    let color = randomcolor();
  h1.innerText=  color;
  div.style.backgroundColor= color;
});
let randomcolor = function(){
let red = Math.floor(Math.random()*255) ;// starts from 0-255 so no need of adding 1
let green = Math.floor(Math.random()*255);
let blue = Math.floor(Math.random()*255);
return(`rgb(${red},${green},${blue})`);
};
