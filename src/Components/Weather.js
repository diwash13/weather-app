import React from "react";

const Weather = props => (
  <div>
       { props.city && props.country && <p>Location: {props.city}, {props.country}</p> } 
       { props.temperature && <p>Temperature: {props.temperature} °F</p> }
       { props.maxTemp && <p>Max Temp: {props.maxTemp} </p> }
       { props.minTemp && <p>Min Temp: {props.minTemp} </p> }
       { props.humidity && <p>Humidity: {props.humidity}%</p> }
       { props.description && <p>Conditions: {props.description}</p> }
       { props.error && <p>{props.error}</p> }
     </div>
)

export default Weather;
