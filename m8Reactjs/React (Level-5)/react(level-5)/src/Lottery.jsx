// Lottery.jsx
import {useState} from 'react';
import { generateRandArr,sum } from './helper';
import Ticket from './Ticket'
import Button from './Button'

export default function Lottery({n=3,winningSum}){
    const[ticket,setTicket]=useState([generateRandArr(n)]); // size n

    let isWinning = winningSum(ticket); 
    function update(){
      setTicket(generateRandArr(n)); // size n
    }
    return(
        <div>
        <h3>Lottery</h3>
        <Ticket ticket={ticket}/>
        <br></br>
        <Button action={update}/>
        <h3>{isWinning && "Congratulations you won!"}</h3>
        </div>
    )
}