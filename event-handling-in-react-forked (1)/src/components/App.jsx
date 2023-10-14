import React, { useState } from "react";

function App() {
  const [headlingText, setHeadingText] = useState("hello");
  const [mouseOver, setMouseOver] = useState(false);

  function changeColour() {
    setMouseOver(true);
  }
  function chhangeColour() {
    setMouseOver(false);
  }
  function clickedButton() {
    console.log("Clicked");
  }

  return (
    <div className="container">
      <h1>{headlingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onClick={clickedButton}
        onMouseOver={changeColour}
        onMouseOut={chhangeColour}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
