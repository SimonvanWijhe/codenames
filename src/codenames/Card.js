import React, { useState } from "react";

function Card({ cardData, spySwitch }) {
  const word = cardData.word;
  const color = cardData.color;
  const [hover, setHover] = useState(false);

  function showColor() {
    switch (color) {
      case "red":
        return " text-danger";
      case "blue":
        return " text-primary";
      case "black":
        return " bg-secondary rounded text-white";
      default:
        return "";
    }
  }
  function hoverOn() {
    setHover(true);
  }

  function hoverOff() {
    setHover(false);
  }

  return (
    <div
      className={
        "card text-center bg-light mb-4 border-0 position-relative" +
        (hover ? " shadow" : "")
      }
      style={{ minWidth: 10 + "rem" }}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
    >
      <a href="https://www.google.nl" className={"link-unstyled"}>
        <div className={"card-body" + (spySwitch ? showColor() : "")}>
          <h5 className="card-title mb-0">{word}</h5>
        </div>
      </a>
    </div>
  );
}

export default Card;
