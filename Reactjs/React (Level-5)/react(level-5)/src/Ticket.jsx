// Ticket.jsx 
import Ticketnum from './Ticketnum';
import './Ticket.css'
export default function Ticket({ticket}){
    return (
        <div className="ticket">
            {ticket.map((t,index)=>(
            <Ticketnum key={index} num={t}/>
            ))}
        </div>
    )
}