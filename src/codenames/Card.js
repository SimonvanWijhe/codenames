import React, { useState } from "react";

function Card({ cardData, spySwitch, subtractCard }) {
  const word = cardData.word;
  const color = cardData.color;
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  function showColor() {
    switch (color) {
      case "red":
        return " text-danger" + (click ? "text-white" : "");
      case "blue":
        return " text-primary" + (click ? "text-white" : "");
      case "black":
        return " bg-dark rounded text-white";
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

  function showBackgroundColor() {
    switch (color) {
      case "red":
        return " bg-danger text-white";
      case "blue":
        return " bg-primary text-white";
      case "black":
        return " bg-dark rounded text-white";
      default:
        return " bg-secondary text-white";
    }
  }

  function handleClick() {
    setClick(true);
    subtractCard(color);
  }

  return (
    <div
      className={
        "card text-center mb-4 border-0 position-relative" +
        (hover ? " shadow" : "") +
        (click === true ? showBackgroundColor() : " bg-light")
      }
      style={{ minWidth: 10 + "rem" }}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      onClick={handleClick}
    >
      <div className={"card-body" + (spySwitch ? showColor() : "")}>
        <h5 className="card-title mb-0">{word}</h5>
      </div>
    </div>
  );
}

export default Card;
