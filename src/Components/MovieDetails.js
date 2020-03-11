import React, { Component } from 'react';
import './movie-list.css';
import ViewMovies from './ViewMovie'; 

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMovies:[]
    }
  }
  
  componentDidMount(){
    const { match: { params } } = this.props;
    console.log("match:", params.id)
    const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US`;

    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          viewMovies: json
        });
        console.log("json", json)
      });

    }
  render() {
    const { viewMovies }=this.state;
    console.log("viewm:", viewMovies )
    console.log("viewm:", viewMovies.original_title )
    return (
      <div className="movie-details">
        <ViewMovies
        view={viewMovies}
        />
      </div>
    );
  }
}

export default MovieDetails;
