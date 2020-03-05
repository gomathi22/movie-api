import React, { Component } from 'react';
import MovieList from './MovieList';

class Movies extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        movies: []
      }
    }
    componentDidMount() {
      const url = "https://api.themoviedb.org/3/discover/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&sort_by=popularity.desc";
      const response = fetch(url);
      const data =  response.json();
      this.setState({
        movies: data.results,
        loading: false
      });
    }
  
    render() {
      const { movies } = this.state
      return (
        <div>
          {this.state.loading || !this.state.movies ? <div>loading...</div>
            :
            <div>
              <div>
                {movies.map((movie, key) =>
                <MovieList 
                  id={movie.id}
                  title={movie.original_title}
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