import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";

//Style
import Button from "@material-ui/core/Button";

const Move = () => {
  //   const north = { direction: "n" };
  //   const south = { direction: "s" };

  const initialValues = {
    //   north: { direction: "n" },
    //   south: { direction: "s" },
    direction: "",
  };
  const [move, setMove] = useState(initialValues);

  const handleChange = (e) => {
    e.preventDefault();
    setMove({
      ...move,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/adv/move/", move)
      .then((res) => {
        console.log(res);
        setMove(res.data);
      })
      .catch((err) => {
        console.log("Error moving character", err);
      });
  };

  return (
    <div onChange={handleChange}>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleClick}
        value={move.north}
      >
        North
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleClick}
        value={move.south}
      >
        South
      </Button>
      {/* <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        West
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        East
      </Button> */}
    </div>
  );
};

export default Move;
