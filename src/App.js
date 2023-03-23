import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import img from "./assets/824695.png";
//

function App() {
  const [data, setData] = useState();
  const getInformation = () => {
    getUser(data);
  };

  const getUser = (data) => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=2a2d2c1084510c9ee2a4f59bf22bb608&query=${data}`
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="heading">Weather App</div>
      <div className="searchBox">
        <input type="text" onChange={(e) => setData(e.target.value)} />
        <input type="text" />
        <button onClick={getInformation}>Submit</button>
      </div>
      <div className="areaBaseContainer">
        <div className="locationName">Mmbai , IN. Weather</div>
        <div className="time">As of 7:29PM</div>
        <div className="temprature">
          <div className="temp">28</div>
          <span className="degree">o</span>
          <div>
            <img src={img} alt="" />
            <div className="define-winter">Haze</div>
          </div>
        </div>
        <div>haze</div>
      </div>
      <div className="all_details">
        <div style={{ width: "50%" }}>
          <div className="description">
            High/Low <span className="value">28/29</span>
          </div>
          <div className="description">
            Humidity <span className="value">88%</span>
          </div>
          <div className="description">
            Pressure <span className="value">1005 hpa</span>
          </div>
          <div className="description">
            Visibility <span className="value">4 km</span>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div className="descriptionRight">
            Wind <span className="value">14 km/hr</span>
          </div>
          <div className="descriptionRight">
            Wind Direction <span className="value">270 deg</span>
          </div>
          <div className="descriptionRight">
            Sunrise <span className="value">6:26:20 AM</span>
          </div>
          <div className="descriptionRight">
            Sunset <span className="value">6:41:27 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
