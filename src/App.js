import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import NavigationBar from "./components/NavigationBar";
import BlankPage from "./components/BlankPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" component={NavigationBar}>
            <NavigationBar />
            <Banner />
          </Route>
          <Route path="/rent" component={BlankPage} >
            <BlankPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
