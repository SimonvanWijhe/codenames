import React from "react";
import Board from "./Board";
import { getCards } from "./cardData";

function Game() {
  const startPlayer = Math.random() < 0.5 ? "red" : "blue";
  const cards = getCards(startPlayer);
  const cardsLeft = {
    red: startPlayer === "red" ? 9 : 8,
    blue: startPlayer === "blue" ? 9 : 8,
  };

  return <Board cards={cards} game={{ startPlayer, cardsLeft }} />;
}

export default Game;
