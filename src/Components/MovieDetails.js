import React, { Component } from 'react';
import './movie-list.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    const { id } =  this.props;
    console.log(id)

    return (
      <div className="movie-details">
      </div>
    );
  }
}

export default MovieDetails;
