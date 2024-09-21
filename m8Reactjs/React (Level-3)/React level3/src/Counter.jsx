//Counter.jsx
import { useState } from "react";
export default function Counter(){
   let [countVal,setVal]=useState(0);
    // let counter = 0;
    return(
        <div>
            <h1>Counter: {countVal}</h1>
            <button 
            onClick={()=>
                {
                    setVal(++countVal);
            
                }
        }> Update Counter </button>
        </div>
    )
}