// Form.js
import {useState} from 'react';
export default function Form(){
    let [formData,setFormData]=useState({name:"",username:"",password:""});

    let handleInputChange =(ev)=>{
        let fieldName = ev.target.name;
        setFormData((d)=>{return {...d,[fieldName]:ev.target.value}})
    }

    let handleSubmit=(ev)=>{
        ev.preventDefault();
        setFormData(
            {
                name:"",
                username:"",
                password:""
            }
        )
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Enter Name : </label>
            <input name="name" id="name" onChange={handleInputChange}value={formData.name}placeholder="Enter Name" type="text"></input>

            <br/><br/>
            <label htmlFor="username">Username : </label>
            <input name="username" id="username" onChange={handleInputChange}value={formData.username}placeholder="Enter Username" type="text"></input>

            <br/><br/>
            <label htmlFor="password">Password : </label>
            <input name="password" id="password" onChange={handleInputChange}value={formData.password}placeholder="Enter Password" type="password"></input>

            <br/><br/>
            <button>Submit</button>
        </form>
    )
}