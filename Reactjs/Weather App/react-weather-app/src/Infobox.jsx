import './Infobox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function Infobox({weather}){
    return (
        <div className="card">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://i.imgur.com/Cw79WSH.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {weather.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
          <div>Temperature: {weather.temp}&deg;c</div>
          <div>Humidity: {weather.humidity}%</div>
          <div>Min Temperature: {weather.min_temp}&deg;c</div>
          <div>Max Temperature: {weather.max_temp}&deg;c</div>
          <div>{weather.temp!=0?`This weather can be described as ${weather.desc} and feels like ${weather.feels_like}`:"description"}</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
    )
}