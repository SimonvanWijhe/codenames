import React from "react";
import Score from "./Score";

function Top({ game, cardsLeft }) {
  const startPlayer = game.startPlayer;
  const otherPlayer = startPlayer === "red" ? "blue" : "red";

  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-between">
        <Score color={startPlayer} cardsLeft={cardsLeft} />
        <Score color={otherPlayer} cardsLeft={cardsLeft} />
      </div>
    </div>
  );
}

export default Top;
