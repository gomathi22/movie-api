import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import MovieDetails from "./Components/MovieDetails";

class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/users/:id" component={MovieDetails} />
      </Router>
    );
  }
}

export default AppRoutes;

