// src/features/todo/todoSlice.js
import {createSlice ,nanoid} from "@reduxjs/toolkit"; // importing slice from redux toolkit

const initialState = { // initial state of the todo slice
    todoList: [{id: 1, task: "sample task", completed: false}]
    };
export const todoSlice = createSlice({
     name:"todo", // name of the slice 
     initialState,
     reducers:{
        addTodo : (state,action)=>{
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                completed: false
            }
            state.todoList.push(newTodo); // state = initialState 
            // direct mutation of state is allowed in redux toolkit
        },
        deleteTodo : (state,action)=>{
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload); 
        },
        markasDone: (state, action) => {
            state.todoList = state.todoList.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true,
                    };
                }
                return todo;
            });
        }
     }

})
export const {addTodo,deleteTodo,markasDone} = todoSlice.actions; // exporting the actions
export default todoSlice.reducer; // exporting the reducer