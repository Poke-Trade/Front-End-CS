import React from "react";
import charm from "../assets/charm.png";
import coin from "../assets/coin.png";

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
      <img className="coin" src={coin} alt="charm" style={money} />
    </div>
  );
};
export default Rooms;
