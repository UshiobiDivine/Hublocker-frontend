import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import NavigationBar from "./components/NavigationBar";
import SingleSelect from "./components/Selectbox";
import Location from "./components/Location";
import Table from "./components/Table";

function App() {
  return (
    <div className="app">
      <Router>
        <NavigationBar />
        <Banner />
        <Location/>
        <Table/>
        {/* <SingleSelect /> */}

        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
