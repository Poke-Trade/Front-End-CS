import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";
import Move from "./move";

//Styles
import game from "../styles/game.css";
const Game = () => {
  // const classes = useStyles();
  const [data, setData] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get("/adv/init/")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, []);
  return (
    <div>
      <div className="game-area"></div>
      <Move />
    </div>
  );
};

export default Game;
