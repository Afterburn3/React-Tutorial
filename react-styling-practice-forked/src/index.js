//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

let date = new Date();
let time = date.getHours();

function newTime() {
  return time < 12
    ? "Good Morning"
    : time > 18
    ? "Good Night"
    : "Good Afternoon";
}

function colorText() {
  return time < 12 ? "red" : time > 18 ? "blue" : "green";
}

ReactDOM.render(
  <>
    <h1 style={{ color: colorText() }}> {newTime()}</h1>
  </>,
  document.getElementById("root")
);
