import React, { Component } from "react";
import { BrowserRouter as Router, Route, browserHistory } from "react-router-dom";
import App from "./App";
import MovieDetails from "./Components/MovieDetails";
import MoviesSearch from "./Components/MoviesSearch";

class AppRoutes extends Component {
  render() {
    return (
      <Router history={browserHistory} >
        <Route exact path="/" component={App} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/moviesSearch" component={MoviesSearch} />

      </Router>
    );
  }
}

export default AppRoutes;

