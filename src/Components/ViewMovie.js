import React, { Component } from 'react';
import { withRouter  } from "react-router-dom";
import './movie-list.css';

class ViewMovies extends Component {
  constructor(props) {
    super(props);   
    this.state = {
    }
  }
  

  render() {
    const { view } = this.props
    return (
      <div className="movie-list">
        <h4>MOVIE TITLE : {view.original_title} </h4>
        <div className="imag">
          <img src={" http://image.tmdb.org/t/p/w185/" + view.poster_path} alt={view.poster_path} />
        </div>
      </div>
    );
  }
}

export default withRouter(ViewMovies);
