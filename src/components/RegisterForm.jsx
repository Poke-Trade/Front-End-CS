import React, { useState } from "react";
import axiosWithAuth from "./axiosWithAuth";
import char from "../assets/char2.png";
import "../styles/App.css";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import styled from "styled-components";

const useStyles = makeStyles({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    // marginTop: "30%",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    // marginTop: theme.spacing(3),
  },
  submit: {
    // margin: theme.spacing(3, 0, 2),
  },
});

const Register = (props) => {
  const classes = useStyles();
  const initialValues = {
    username: "",
    password1: "",
    password2: "",
  };

  const [register, setRegister] = useState(initialValues);

  const handleChange = (e) => {
    e.preventDefault();
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/register", register)
      .then((res) => {
        localStorage.setItem("key", res.data.key);
        console.log(res);
        props.history.push("/");
      })
      .catch((err) => {
        console.log("Error Registering In", err);
      });
  };

  return (
    <RegisterContainer>
      <img className="Char" src={char} alt="char" />
      <Container maxWidth="xs">
        <div className={classes.paper}>
          <Typography variant="h5">Create your account!</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={register.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password1"
                  label="Password"
                  type="password"
                  id="password1"
                  autoComplete="current-password"
                  value={register.password1}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password2"
                  label="Retype Password"
                  type="password"
                  id="password2"
                  autoComplete="current-password"
                  value={register.password2}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-start">
              <Grid item>
                <Link to="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </RegisterContainer>
  );
};
export default Register;

const RegisterContainer = styled.div`
  background: #b0bec5;
  height: 100vh;
`;
