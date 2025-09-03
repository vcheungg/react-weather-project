import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/vcheungg"
            target="_blank"
            rel="noreferrer"
          >
            Vivian Cheung
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/vcheungg/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github.
          </a>{" "}
          and{" "}
          <a
            href="https://react-v-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
