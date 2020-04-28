import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";

//Style
import Button from "@material-ui/core/Button";

const Move = () => {
  const initialValues = {
    direction: "s",
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
        setMove(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log("Error moving character", err);
      });
  };
  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        North
      </Button>
      {/* <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        South
      </Button> */}
    </div>
  );
};

export default Move;
