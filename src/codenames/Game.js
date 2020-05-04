import React from "react";
import Board from "./Board";
import { getCardData } from "./cardData";

function Game() {
  const startPlayer = "red";
  return <Board cardData={getCardData()} startPlayer={startPlayer} />;
}

export default Game;
