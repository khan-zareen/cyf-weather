import React, { Component } from "react";
import "./App.css";
import storm from "./img/weather-icons/storm.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header app-header">
          FIND WEATHER<div>london</div>
        </header>
        <main className="app__main app_main">
          <div className="overcast">
            <div>
              <img src={storm} alt={"stormy weather"} />
            </div>

            <h1>overcast clouds</h1>
          </div>

          <div className="temp">
            <h2>Temperature 10 &#176; to 11 &#176;C </h2>
          </div>

          <div className="humidity_pressure">
            <p>Humidity</p>
            <p>78%</p>
            <p>Pressure</p>
            <p>1008.48</p>
          </div>

          <div className="twentyfour_hours">
            <div>
              <p>03:00</p>

              <div className="icon">
                <img src={storm} alt="stormy weather" />
              </div>
              <p> 8 &#176;C</p>
            </div>

            <div>
              <p>06:00</p>

              <div className="icon">
                <img src={storm} alt="stormy weather" />
              </div>

              <p> 9 &#176;C</p>
            </div>

            <div>
              <p>09:00</p>
              <div className="icon">
                <img src={storm} alt="stormy weather" />
              </div>
              <p> 14 &#176;C</p>
            </div>

            <div>
              <p>12:00</p>
              <div className="icon">
                <img src={storm} alt="stormy weather" />
              </div>
              <p> 17 &#176;C</p>
            </div>

            <div>
              <p>15:00</p>
              <div className="icon">
                <img src={storm} alt="stormy weather" />
              </div>
              <p> 18 &#176;C</p>
            </div>

            <div>
              <p>18:00</p>
              <img src={storm} alt="stormy weather" />
              <p> 16 &#176;C</p>
            </div>

            <div>
              <p>21:00</p>
              <img src={storm} alt="stormy weather" />
              <p> 13 &#176;C</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
