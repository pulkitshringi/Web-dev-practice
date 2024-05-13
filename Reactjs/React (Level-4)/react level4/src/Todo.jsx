// Todo.jsx
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function Todo(){
    let [toDoList,setToDo]=useState([{task:"Sample Task",key:uuidv4()}]);
    let [newToDo,setNewToDo]=useState("");
    let inputChange = (ev)=>{
        setNewToDo(ev.target.value);
    }
    let addTask = ()=>{
        setToDo((t)=>{return [...t,{task:newToDo,key:uuidv4()}]});
        setNewToDo("");
    }
    let deleteTask = (id) => {
        setToDo(() => { return toDoList.filter((task) => task.key !== id)});
    }
    
    return (
        <div>
        <h1>Todo List : </h1>
        <hr></hr>
        <input type="text" placeholder="Enter task" value={newToDo}onChange={inputChange}></input>
       <br></br><br></br>
       <button onClick={addTask}>Add Task</button>
       <ul>{toDoList.map((t)=>{return <li key={t.key}><span>{t.task}</span> <button onClick={()=>{deleteTask(t.key)}}>Delete</button></li>})}</ul>
        </div>
    )
}