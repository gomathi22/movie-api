import React, { Component } from 'react';
import './movie-list.css';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  viewItem(){
    console.log("view :")
    
  }

  render() {

    return (
      <div className="movie-list">
          <h4>MOVIE TITLE : {this.props.title} </h4>
          <button onClick={()=> {
            this.viewItem()
          } }> VIEW</button>
      </div>
    );
  }
}

export default MovieList;
