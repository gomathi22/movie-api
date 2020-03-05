import React, { Component } from 'react';
import { browserHistory  } from "react-router";
import './movie-list.css';


class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  viewItem(key){
    browserHistory.push("/users/" + key);
  }

  render() {

    return (
      <div className="movie-list">
          <h4>MOVIE TITLE : {this.props.title} </h4>
          <button onClick={()=> {
            this.viewItem(this.props.id)
          } }> VIEW {this.props.id} </button>
      </div>
    );
  }
}

export default MovieList;
