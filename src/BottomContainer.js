import React from "react";
import Weather from "./Weather";

export default function BottomContainer() {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div id="city"></div>
          <Weather />
        </div>
        <div className="col-6" id="icon-current-temp-c-f">
          <span id="temp-icon">
            <img src="" alt="" id="icon" className="temp-icon" />
          </span>
          <span id="temperature"></span>
          <span className="units">
            <a href="_blank" id="celsius-link" className="active">
              °C
            </a>{" "}
            |
            <a href="_blank" id="fahrenheit-link">
              °F
            </a>
          </span>
        </div>
      </div>
      <div className="row"></div>
      <div id="weather-forecast"></div>
    </div>
  );
}
