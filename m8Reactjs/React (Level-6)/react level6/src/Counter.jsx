//Counter.jsx
import {useState,useEffect} from 'react';
export default function Counter(){
    let [countx,setCountx]=useState(0);
    let [county,setCounty]=useState(0);
    let countinx =()=>{
        setCountx((c)=>{return c+1});
    }
    let countiny =()=>{
        setCounty((c)=>{return c+1});
    }
    useEffect(function display(){
        console.log("This is side effect ;)");
    },[])
    return (
        <div>
            <h3>Counter:- </h3>
            <p>Countx : {countx}</p>  
            <button onClick={countinx}>Update Countx</button>
            <p>County : {county}</p>
            <button onClick={countiny}>Update County</button>
        </div>
    )
}