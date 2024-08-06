// CommentsForm.jsx
import {useState} from 'react';
export default function CommentsForm(){
    let [formData,setFormData]=useState({username:"",comment:"",rating:5});

    let handleInputChange = (ev)=>{
        setFormData((d)=>{return {...d,[ev.target.name]:ev.target.value}})
    }
    let handleSubmit = (ev)=>{
        ev.preventDefault();
        console.log(formData);
        setFormData(
            {username:"",comment:"",rating:5}
        )
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Comments:-</h3>
            <label htmlFor="username">Enter Username: </label>
            <input onChange={handleInputChange} name="username"value={formData.username}id="username"type="text"placeholder="Enter Username"></input>


            <br/><br/>
            <label htmlFor="area">Enter Comment: </label>
            <textarea onChange={handleInputChange}name="comment" value={formData.comment}id="area" placeholder="Enter comments"></textarea>


            <br/><br/>
            <label htmlFor="rating">Ratings : </label>
            <input onChange={handleInputChange} name="rating"value={formData.rating} id="rating"type="number"min={1}max={5}></input>


            <br/><br/>
            <button>Submit</button>
        </form>
    )
}