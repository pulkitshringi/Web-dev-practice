// Jokes.jsx
import {useState,useEffect} from 'react'
export default function Jokes(){
    let url = "https://official-joke-api.appspot.com/random_joke";

    let gen = async ()=>{
        let joke = await fetch(url);
        let jokee = await joke.json();
       setJoke(jokee)
    }

    
    let [joke,setJoke]=useState({})
  
    useEffect(()=>{gen()},[])
    return (
        <div>
            <h2>Jokes :-</h2>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <button onClick={gen}>Generate Joke</button>
        </div>
    )
}