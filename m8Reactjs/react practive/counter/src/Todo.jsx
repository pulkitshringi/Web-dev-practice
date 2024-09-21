import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Todo(){
    let [toDo,setToDo]= useState([{task:"Default Task",key:uuidv4()}]);
    let [newTask,setNew]=useState("");
    let deletee = (id)=>{
        setToDo((task)=>{return task.filter((t)=>{return t.key!==id})});
    }

    return(
        <div>
            <h3>Todo :- </h3>
            Task : <input onChange={(ev)=>setNew(ev.target.value)} value={newTask} type="text"></input>
            &nbsp;&nbsp;

            <button onClick={()=>{
                setToDo(()=>([...toDo,{task:newTask,key:uuidv4()}]));setNew("");
            }}>Add Task</button>
            <br></br><br></br><br></br>
            
            {toDo.map((t)=><li key={t.key}>{t.task}&nbsp;&nbsp;
            <button onClick={()=>{deletee(t.key)}}>Delete</button></li>)}
            <br></br>
            <button onClick={()=>{
                setToDo((t)=>{return t.map((t)=>{return {...t,task:t.task.toUpperCase()}})})
            }}>Upercase All</button>
        </div>
    )
}