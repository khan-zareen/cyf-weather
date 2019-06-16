import React from "react";
import cloudy from "../img/weather-icons/cloudy.svg";
import ReactDOM from "react-dom";

export function FINDWEATHER() {
  return <div>FIND WEATHER</div>;
}

export function Search() {
  return <div>search</div>;
}

export function Image() {
  return (
    <div>
      <img src={cloudy} alt={"cloudy weather"} />
    </div>
  );
}
