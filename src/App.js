import { FINDWEATHER } from "./component/search";
import { Search, Image } from "./component/search";
import cloudy from "./img/weather-icons/cloudy.svg";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <FINDWEATHER />
        <Search />
        <Image src={cloudy} />
      </div>
      /* // <div className="app">
      // <header className="Zareenweather_app">
      //     FIND WEATHER<div>london</div>
      //   </header>
      //   <main className="app__main">
      //     <div>
      //       <img src={storm} alt={"stormy weather"} />
      //       <div>
      //         <h1>overcast clouds</h1>
      //         <div>
      //           <h2>Temperature 10 &#176; to 11 &#176;C </h2>
      //           <div>
      //             <p>Humidity</p>
      //             <p>78%</p>
      //             <p>Pressure</p>
      //             <p>1008.48</p>
      //             <div>
      //               <p>03:00</p>
      //               <img src={storm} alt="stormy weather" />
      //               <p> 8 &#176;C</p>
      //             </div>
      //             <div>
      //               <p>06:00</p>
      //               <img src={storm} alt="stormy weather" />
      //               <p> 9 &#176;C</p>
      //             </div>
      //             <div>
      //               <p>09:00</p>
      //               <img src={storm} alt="stormy weather" />
      //               <p> 14 &#176;C</p>
      //             </div>
      //             <div>
      //               <p>12:00</p>
      //               <img src={storm} alt="stormy weather" />
      //               <p> 17 &#176;C</p>
      //             </div>
      //             <div>
      //               <p>15:00</p>
      //               <img src={storm} alt="stormy weather" />
      //               <p> 18 &#176;C</p>
      //             </div>
      //             <div>
      //               <p>18:00</p>
      //               <img src={storm} alt="stormy weather" />
      //               <p> 16 &#176;C</p>
      //             </div>
      //             <div>
      //               <p>21:00</p>
      //               <img src={storm} alt="stormy weather" />
      //               <p> 13 &#176;C</p>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </main>
      // </div> */
    );
  }
}

export default App;
