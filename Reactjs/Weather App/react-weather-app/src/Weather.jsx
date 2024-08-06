// Weather.jsx
import {useState} from 'react';
import './Weather.css';
import Searchbox  from './Searchbox';
import Infobox from './Infobox';
export default function Weather(){
    let [weather,setWeather]=useState(
        {
            city:"Enter City",
            temp:0,
            Humidity:0,
            min_temp:0,
            max_temp:0,
            feels_like:0,
            desc:"enter City"
        }
    );
    return(
        <div>
            <h2>Search for the weather</h2>
            <Searchbox setWeather={setWeather}/>
            <Infobox weather={weather}/>
        </div>
    )
}