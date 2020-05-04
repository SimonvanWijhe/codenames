import React, { useState } from "react";
import Cards from "./Cards";
import Top from "./Top";
import Bottom from "./Bottom";

function Board(props) {
  const [spySwitch, setSpySwitch] = useState(false);

  function onSpySwitchChange(checked) {
    setSpySwitch(checked);
  }

  return (
    <div className="container mt-5" style={{ maxWidth: 950 + "px" }}>
      <h1 className="text-center mb-5">CODENAMES</h1>
      <Top />
      <Cards cardData={props.cardData} spySwitch={spySwitch} />
      <Bottom spySwitch={spySwitch} onSpySwitchChange={onSpySwitchChange} />
    </div>
  );
}

export default Board;
