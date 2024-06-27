// src/components/Todo.jsx
import { useSelector,useDispatch } from "react-redux";
import { deleteTodo,markasDone } from "../features/todo/todoSlice";
import AddForm from "./AddForm";
export default function Todo(){
    const dispatch = useDispatch();
    const todos = useSelector((state)=>state.todoList);
    const handleButton = (id)=>{
        dispatch(deleteTodo(id));
    }
    const handleDone = (id)=>{
        dispatch(markasDone(id));
    }
    return (
        <>
        <AddForm/>
        <h2>Todo:</h2>

        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>{todo.completed?<s>{todo.task}</s>:todo.task} &nbsp;
                <button onClick={()=>{handleButton(todo.id)}}>Delete Task</button>&nbsp;
                <button onClick={()=>handleDone(todo.id)}>Mark Done</button></li>
            ))}
         </ul>
        </>
    )
}