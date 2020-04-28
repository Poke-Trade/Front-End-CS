import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

//Components
import Home from "./components/Home";
import Register from "./components/RegisterForm";
import Game from "./components/Game";
import PrivateRoute from "./components/PrivateRoute";
// Styles

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/poketrade" component={Game} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
