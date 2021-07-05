import React, { useEffect, useState } from "react";
import WeatherComponent from './modules/WeatherComponent'
import CityComponent from './modules/CityComponent'

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background:gray;
  width:90vw;
  margin: auto;
  text-align: center;
  height: 50vh;
  align-items: center;
`;


// const WeatherComponent = styled.div`
//   display: flex;
//   flex-direction: column;
//   background: #3d00f7;
//   height: 30vh;
//   width: 70vw;
//   background: linear-gradient(153deg, #3d00f7 0%, #c23fc9 83%);
//   background: -webkit-linear-gradient(153deg, #3d00f7 0%, #c23fc9 83%);
//   background: -moz-linear-gradient(153deg, #3d00f7 0%, #c23fc9 83%);
//   border-radius: 19px 19px 19px 19px;
//   -webkit-border-radius: 19px 19px 19px 19px;
//   -moz-border-radius: 19px 19px 19px 19px;
//   justify-content: center
// `;

// const ReactWeatherApp = styled.h1`
//   font-size: 3em;
//   font-family: Montserrat;
// `;

// function App() {
//   return (
//     <Container>
//       <h1>React Weather App</h1>
//       <CityComponent />
//     </Container>
//   );
// }

const API_KEY = 'c8425e1eb4903f93b364b69c1f6c7447';


export default function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long]);

  return (
    <div className="App">

    </div>
  );
}
