import React, { Component } from 'react';
import './App.css';
import MovieList  from "./Components/MovieList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: []
    }
  }
  async componentDidMount() {
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&sort_by=popularity.desc";
    const response = await fetch(url);
    const data = await response.json();
    console.log("data:", data.results)
    this.setState({
      movies: data.results,
      loading: false
    });
    console.log("movie:", this.state.movies)
  }

  render() {
    const { movies } = this.state
    console.log("movie in render:", movies)
    return (
      <div>
        {this.state.loading || !this.state.movies ? <div>loading...</div>
          :
          <div>
            <div>
              {movies.map((movie,key) =>
              <MovieList 
                key={key}
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

export default App;
