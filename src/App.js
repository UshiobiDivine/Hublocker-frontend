import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="app">
      <Router>
        <NavigationBar />
        <Banner />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
