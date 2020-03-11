import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import './movie-list.css';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  

  render() {
    const { movie } = this.props
    console.log(movie)
    return (
      <div className="movie-list">
        <h4>MOVIE TITLE : {movie.original_title} </h4>
        <div className="imag">
          <img src={"http://image.tmdb.org/t/p/w185/" + movie.poster_path} alt={movie.poster_path} />
        </div>
        <Link to={`/movies/${movie.id}`}> VIEW</Link>
      </div>
    );
  }
}

export default withRouter(MovieList);
