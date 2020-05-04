import React from "react";

function Score({ color, cardsLeft }) {
  return (
    <div>
      <p>
        {color === "red" ? "Rood: " : "Blauw: "}
        <span className={color === "red" ? "text-danger" : "text-primary"}>
          {cardsLeft[color]}
        </span>
      </p>
    </div>
  );
}

export default Score;
