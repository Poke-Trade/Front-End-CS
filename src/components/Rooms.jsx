import React from "react";
import charm from "../assets/charm.png";
import coin from "../assets/coin.png";
import poke from "../assets/pokeball.png";

const Rooms = (props) => {
  //   console.log(props);
  const char = {
    left: `${props.player[0]}%`,
    top: `${props.player[1]}%`,
  };
  const money = {
    left: `${props.coin[0]}%`,
    top: `${props.coin[1]}%`,
  };

  return (
    <div>
      <img className="charm" src={charm} alt="charm" style={char} />
      <img className="coin" src={coin} alt="coin" style={money} />
      {props.pokeball !== null ? (
        <img
          className="poke"
          src={poke}
          alt="poke"
          style={{
            left: `${props.pokeball[0]}%`,
            top: `${props.pokeball[1]}%`,
          }}
        />
      ) : null}

      <span>{props.counter}</span>
      <span>{props.counterPoke}</span>
    </div>
  );
};
export default Rooms;
