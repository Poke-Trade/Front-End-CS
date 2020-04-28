import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";
import Move from "./move";

const Game = () => {
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
      {" "}
      <p>Game</p>
      <Move />
    </div>
  );
};

export default Game;
