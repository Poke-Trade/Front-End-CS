import React from "react";
import Login from "./LoginForm";
import { Link } from "react-router-dom";

//Styles
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    // backgroundColor: "#212121",
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
    margin: "5px",
  },
});
const Home = (props) => {
  const classes = useStyles();
  return (
    <HomeContainer>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <ToolBar variant="dense">
            <Grid container flex-direction="row" justify="space-between">
              <Grid>
                <Typography className={classes.title}> Pok-E-Trade</Typography>
              </Grid>
              <Grid>
                <Button> About</Button>
                <Button
                  component={Link}
                  to="/poketrade"
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.buttonPadding}
                >
                  {" "}
                  Play Now!
                </Button>
              </Grid>
            </Grid>
          </ToolBar>
        </AppBar>
        <LoginContainer>
          <Login />
        </LoginContainer>
      </div>
    </HomeContainer>
  );
};

export default Home;

const LoginContainer = styled.div`
  margin-top: 10%;
`;
const HomeContainer = styled.div`
  background: #b0bec5;
  height: 100vh;
`;
