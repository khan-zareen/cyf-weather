import React from "react";
import "../App.css";
class Search extends React.Component {
  render() {
    return (
      <div>
        <header className="app-header">
          <input className="inputBar" value="london" />
          <button className="btn">FIND WEATHER</button>
        </header>
      </div>
    );
  }
}
export default Search;
