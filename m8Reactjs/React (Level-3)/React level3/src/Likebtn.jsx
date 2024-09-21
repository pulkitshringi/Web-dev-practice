// Likebtn.jsx
import { useState } from "react";
function init(){
    console.log("init was called.")
    return (Math.random())
}
export default function Likebtn(){
    let [count,setCount]=useState(init); 
    console.log("Count: "+count);
    let toogle = ()=>{
        setCount(count+1) 
    }
return (
    <>
    <p onClick={toogle}>  
    Count : {count} <br></br>
    </p>
    </>
)

}