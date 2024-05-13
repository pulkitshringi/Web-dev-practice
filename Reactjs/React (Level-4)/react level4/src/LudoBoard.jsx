// LudoBoard.jsx
import React, { useState } from 'react';
export default function LudoBoard(){
    let [counts,setCount]=useState({blue:0,orange:0,green:0,red:0});
    let [arr,setArr] = useState(["Colors: "])
    return (
        <div>
          <p>{arr}</p>
            <p onClick={()=>{setCount(prevCounts=>({...prevCounts,blue:prevCounts.blue+1}));setArr((a)=>{return([...a," blue ,"]) })}}
            style={{backgroundColor:"blue"}}>Blue Count : {counts.blue}</p>

              <p onClick={()=>{setCount(prevCounts=>({...prevCounts,orange:prevCounts.orange+1}));setArr((a)=>{return([...a," orange ,"]) })}}
            style={{backgroundColor:"orange"}}>Orange Count : {counts.orange}</p>

              <p onClick={()=>{setCount(prevCounts=>({...prevCounts,green:prevCounts.green+1}));setArr((a)=>{return([...a," green ,"]) })}}
            style={{backgroundColor:"green"}}>Green Count : {counts.green}</p>

              <p onClick={()=>{setCount(prevCounts=>({...prevCounts,red:prevCounts.red+1}));setArr((a)=>{return([...a," red ,"]) })}}
            style={{backgroundColor:"red"}}>Red Count : {counts.red}</p>
        </div>
    )
}