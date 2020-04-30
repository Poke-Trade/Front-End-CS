import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Home from "./components/Home";
import Register from "./components/RegisterForm";
// import Game from "./components/Game";
import GamePage from "./components/GamePage";
import PrivateRoute from "./components/PrivateRoute";
// Styles

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/poketrade" component={GamePage} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
