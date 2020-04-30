import React from "react";
import Game from "./Game";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Styles
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Container from "@material-ui/core/Container";
import ToolBar from "@material-ui/core/Toolbar";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontSize: "2rem",
    margin: "5px",
  },
  appBar: {
    backgroundColor: "#000000",
  },
  buttonPadding: {
    margin: "10px",
  },
  buttonPaddingA: {
    margin: "10px",
    color: "#b71c1c",
  },
});

const GamePage = (props) => {
  const classes = useStyles();

  return (
    <GameContainer>
      {/* <div className={classes.paper}> */}
      <AppBar position="static" className={classes.appBar}>
        <ToolBar variant="dense">
          <Grid container flex-direction="row" justify="space-between">
            <Grid>
              <Typography className={classes.title}> Pok-E-Trade</Typography>
            </Grid>
            <Grid>
              <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
                size="small"
                className={classes.buttonPadding}
              >
                {" "}
                Sign In
              </Button>
              <Button
                component={Link}
                to="/"
                variant="contained"
                size="small"
                className={classes.buttonPaddingA}
              >
                {" "}
                Logout
              </Button>
            </Grid>
          </Grid>
        </ToolBar>
      </AppBar>
      {/* <Container maxWidth="m"> */}
      <Grid>
        <Grid container flex-direction="row" justify="space-between">
          <Button
            component={Link}
            to="/"
            type="submit"
            variant="contained"
            color="primary"
            // className={classes.submit}
          >
            Rules
          </Button>
        </Grid>
        <Game />
      </Grid>
      {/* </Container> */}
      {/* </div> */}
    </GameContainer>
  );
};

export default GamePage;

const GameContainer = styled.div`
  background: #b0bec5;
  height: 100vh;
`;
