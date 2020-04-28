import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

//Styles
import theme from "./mui/custom-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseLine from "@material-ui/core/CssBaseline";
import "./styles/index.css";
import "./styles/App.css";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseLine>
      <Router>
        <App />
      </Router>
    </CssBaseLine>
  </MuiThemeProvider>,
  document.getElementById("root")
);
