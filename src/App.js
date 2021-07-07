import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import BlankPage from "./components/BlankPage";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/rent" component={BlankPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
