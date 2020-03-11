import React, { Component } from 'react';
import MovieList from './MovieList';
import './movie-list.css'

class Movies extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        movies: []
      }
    }
    componentDidMount() {
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&sort_by=popularity.desc")
      .then(res => res.json())
      .then(json => {
        this.setState({
          movies: json.results,
          loading: false 
        });
      });
    }
  
    render() {
      const { movies } = this.state
      return (
        <div>

          <h1>popular movies</h1>

          {this.state.loading || !this.state.movies ? <div>loading...</div>
            :
            <div>
              <div className="pop-movies" >
                {movies.map((movie, key) =>
                <MovieList
                  movie={movie}
                />
                )}
              </div>
            </div>
          }
        </div>
      );
    }
  }
export default Movies;  