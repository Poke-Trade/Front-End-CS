import React, { useState } from "react";
import Game from "./Game";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

// const useStyles = makeStyles({
//   paper: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
// });

const GamePage = (props) => {
  //   const classes = useStyles();

  return (
    <div>
      <Game />
      <Button
        component={Link}
        to="/"
        type="submit"
        variant="contained"
        color="primary"
        // className={classes.submit}
      >
        HomePage
      </Button>
    </div>
  );
};

export default GamePage;
