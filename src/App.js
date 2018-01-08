import React, { Component } from "react";
import Portfolio from "./components/pages/Portfolio.jsx";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tagLine: "If you want to get to know me" };
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route path="/*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
