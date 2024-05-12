import {useState} from 'react'
export default function Iconic(){
    let [currCount,setCount]=useState(0)
    return (
        <>
        <button onClick={()=>{setCount((c)=>{return ++c})}}>Count</button>
        <p>Count : {currCount}</p>
        </>
    )
}