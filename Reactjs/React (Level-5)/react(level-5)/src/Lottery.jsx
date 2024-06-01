import {useState} from 'react'
export default function Lottery(){
    let random = ()=>{ return Math.floor(Math.random() * 900) + 100;}
    let [no,setnos]=useState(random());
    let check = ()=>{
        let sum = 0;
        let temp = no;
        while(temp>0){
            sum+=temp%10;
            temp= Math.floor(temp / 10);
        }
        return sum;
    }
    return (
        <div>
        <h3>{check()===15 ?"Lottery congratulations,you won!":"Lottery"}</h3>
        <p>Lottery Ticket = {no} </p>
        <button onClick={()=>{setnos(random())}}>Get New Ticket</button>
        </div>
    )
}