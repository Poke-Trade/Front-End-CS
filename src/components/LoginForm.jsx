import React, { useState } from "react";
import axiosWithAuth from "./axiosWithAuth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
  },
  submit: {},
});

const Login = (props) => {
  console.log("props", props);
  let history = useHistory();
  const classes = useStyles();
  const initialValues = {
    username: "",
    password: "",
  };

  const [login, setLogin] = useState(initialValues);

  const handleChange = (e) => {
    e.preventDefault();
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login/", login)
      .then((res) => {
        localStorage.setItem("key", res.data.key);
        history.push("/poketrade");
        console.log(history);
      })
      .catch((err) => {
        console.log("Error Login In", err);
      });
  };
  return (
    <Container maxWidth="xs">
      <Typography variant="h5">Sign in</Typography>
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="username"
            value={login.username}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={login.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
