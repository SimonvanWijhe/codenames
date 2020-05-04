import React from "react";
import Card from "./Card";

function Cards(props) {
  const cardData = props.cardData;

  return (
    <div className="card-deck">
      {cardData.map(function (data, key) {
        return <Card key={key} cardData={data} spySwitch={props.spySwitch} />;
      })}
    </div>
  );
}

export default Cards;
