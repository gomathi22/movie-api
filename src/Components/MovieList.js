import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './movie-list.css';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {

    const { movie } = this.props
    console.log(movie.poster_path)
    return (
      <div className="movie-list">
        <h4>MOVIE TITLE : {movie.original_title} </h4>
        <div className="imag">
          <img src={" http://image.tmdb.org/t/p/w185/" + movie.poster_path} alt={movie.poster_path} />
        </div>
        <button onClick={() => {
          this.viewItem(movie.id)
        }}> VIEW {movie.id} </button>
      </div>
    );
  }
}

export default withRouter(MovieList);
