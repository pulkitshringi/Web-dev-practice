// Searchbox.jsx
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css';

export default function Searchbox({setWeather}){
    const [input,setInput]=useState("");
    let api_key = "17703c85d5d644f902cf5254e15f3414";
    let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}&units=metric`;
    let weatherAPI = async ()=>{
        let response = await fetch(api_url);
        let weather = await response.json();
        console.log(weather);
        let result = {
            city:weather.name,
            temp: weather.main.temp,
            humidity:weather.main.humidity,
            min_temp: weather.main.temp_min,
            max_temp : weather.main.temp_max,
            feels_like:weather.main.feels_like,
            desc:weather.weather[0].description
        };
        return result;
    }
    let action = (ev)=>{
        setInput(ev.target.value);
    }

    let submit = async (ev)=>{
        ev.preventDefault();
        console.log(input);
        let res = await weatherAPI();
        setWeather(res)
        }

    return (
        <div className="searchbox">
               <form onSubmit={submit}> 
               <TextField onChange={action}value={input}label="Enter City" variant="outlined" required/>
               <br/><br/>
               <Button type="submit" variant="contained">Search</Button>
               </form>
        </div>
    )
}