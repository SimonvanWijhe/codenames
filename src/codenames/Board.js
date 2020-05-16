import React, { useState } from "react";
import Cards from "./Cards";
import Top from "./Top";
import Bottom from "./Bottom";
import Clock from "./components/Clock";

function Board(props) {
  const [spySwitch, setSpySwitch] = useState(false);
  const [cardsLeft, setCardsLeft] = useState(props.game.cardsLeft);
  const [winnerAnimation, setWinnerAnimation] = useState(false);

  function subtractCard(color) {
    if (color === "red" || color === "blue") {
      const cards = { ...cardsLeft };
      cards[color] = --cards[color];
      if (cards[color] === 0) {
        setWinnerAnimation(true);
      }
      setCardsLeft(cards);
    }
  }

  function onSpySwitchChange(checked) {
    setSpySwitch(checked);
  }

  return (
    <div className="container mt-5" style={{ maxWidth: 950 + "px" }}>
      <h1 className="text-center mb-5">CODENAMES</h1>
      <Top game={props.game} cardsLeft={cardsLeft} />
      <Cards
        cardData={props.cards}
        spySwitch={spySwitch}
        subtractCard={subtractCard}
      />
      <Bottom spySwitch={spySwitch} onSpySwitchChange={onSpySwitchChange} />
      <Clock />
      {console.log(winnerAnimation)}
      {winnerAnimation && (
        <>
          <div class="overlay"></div>
          <div className="centered h1 animated jackInTheBox rainbow-text">
            Gefeliciteerd!
          </div>
        </>
      )}
    </div>
  );
}

export default Board;
