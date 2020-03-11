import React, { Component } from 'react';
import './App.css';
import Movies from "./Components/Movies";
import MoviesSearch from "./Components/MoviesSearch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MoviesSearch />
        <Movies />
      </div>
    );
  }
}

export default App;