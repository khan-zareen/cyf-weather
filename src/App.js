import storm from "./img/weather-icons/storm.svg";

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="Zareenweather_app">
          FIND WEATHER<div>london</div>
        </header>
        <main className="app__main">
          <div>
            <img src={storm} alt={"stormy weather"} />
            <div>
              <h1>overcast clouds</h1>
              <div>
                <h2>Temperature 10 &#176; to 11 &#176;C </h2>
                <div>
                  <p>Humidity</p>
                  <p>78%</p>
                  <p>Pressure</p>
                  <p>1008.48</p>
                  <div>
                    <p>03:00</p>
                    <img src="https://placekitten.com/96/139" />
                    <p> 8 &#176;C</p>
                  </div>
                  <div>
                    <p>06:00</p>
                    <img src="https://placekitten.com/96/140" />
                    <p> 9 &#176;C</p>
                  </div>
                  <div>
                    <p>09:00</p>
                    <img src="https://placekitten.com/200/287" />
                    <p> 14 &#176;C</p>
                  </div>
                  <div>
                    <p>12:00</p>
                    <img src="https://placekitten.com/200/140" />
                    <p> 17 &#176;C</p>
                  </div>
                  <div>
                    <p>15:00</p>
                    <img src="https://placekitten.com/200/139" />
                    <p> 18 &#176;C</p>
                  </div>
                  <div>
                    <p>18:00</p>
                    <img src="https://placekitten.com/200/286" />
                    <p> 16 &#176;C</p>
                  </div>
                  <div>
                    <p>21:00</p>
                    <img src="https://placekitten.com/96/139" />
                    <p> 13 &#176;C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
