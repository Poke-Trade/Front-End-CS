import React from "react";
import Login from "./LoginForm";
// import Register from "./RegisterForm";
import { Link } from "react-router-dom";

//Styles
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#33FFFD",
  },
});
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <ToolBar variant="dense">
          <Grid container flex-direction="row" justify="space-between">
            <Typography variant="h6" classNames={classes.title}>
              {" "}
              PokeTrade
            </Typography>
            <Grid>
              <Button> About</Button>
              <Button
                component={Link}
                to="/poketrade"
                variant="contained"
                color="primary"
                size="small"
              >
                {" "}
                Play Now!
              </Button>
            </Grid>
          </Grid>
        </ToolBar>
      </AppBar>
      <Login />
    </div>
  );
};

export default Home;
