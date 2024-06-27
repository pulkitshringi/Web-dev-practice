// src/components/AddForm.jsx
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../features/todo/todoSlice";
export default function AddForm(){
    let [task,setTask] = useState("");
    let dispatch = useDispatch();

    let handleSubmit = (ev)=>{
        ev.preventDefault();
        dispatch(addTodo(task));
        setTask("");
    }
    let handleChange = (ev)=>{
        setTask(ev.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add todo" value={task} onChange={handleChange}/>&nbsp;&nbsp;
                <button type="submit">Add</button>
            </form>
        </div>
    )
}