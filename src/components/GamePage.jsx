import React, { useState } from "react";
import Game from "./Game";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

//Styles
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HelpSharpIcon from "@material-ui/icons/HelpSharp";
import Button from "@material-ui/core/Button";
import ToolBar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // border: "2px solid black",
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
  content: {
    padding: "30px",
  },
  hover: {
    "&$hover:hover": {
      backgroundColor: "#d1c4e9",
    },
  },
});

const GamePage = (props) => {
  // console.log(props);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.clear("key");
    // history.push("/");
  };

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
                Home
              </Button>
              <Button
                component={Link}
                to="/"
                onClick={handleSubmit}
                variant="contained"
                size="small"
                className={classes.buttonPaddingA}
              >
                {" "}
                Logout
              </Button>
              <IconButton
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
              >
                <HelpSharpIcon />
              </IconButton>
            </Grid>
          </Grid>
        </ToolBar>
      </AppBar>
      <Grid>
        <Grid container flex-direction="row" justify="space-between">
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <MuiDialogTitle onClose={handleClose}>
              <Typography>Rules</Typography>
            </MuiDialogTitle>
            <MuiDialogContent dividers>
              <Typography
                variant="body2"
                gutterBottom
                className={classes.content}
              >
                Get three pokeballs and you win!
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                className={classes.content}
              >
                Move with the arrow keys
              </Typography>
              {/* <Typography variant="body2" gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography> */}
            </MuiDialogContent>
            <MuiDialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Close
              </Button>
            </MuiDialogActions>
          </Dialog>
        </Grid>
      </Grid>
      <Container maxWidth="xl" className={classes.paper}>
        <Typography>Move with the arrow keys</Typography>
        <Game />
      </Container>
    </GameContainer>
  );
};

export default GamePage;

const GameContainer = styled.div`
  background: #b0bec5;
  height: 100vh;
`;
