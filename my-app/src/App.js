import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

//Components
import Home from "./components/Home";
import Register from "./components/RegisterForm";
import Game from "./components/Game";
// Styles

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/poketrade" component={Game} />
        <Route path="/register" component={Register} />
      </Switch>
      {/* <Home /> */}

      {/* <h1>Pokeballs</h1> */}
    </div>
  );
}

export default App;
