import './MoviesSearch.css';
import React, {Component} from 'react';
import MovieList from './MovieList';
import './movie-list.css'

class MoviesSearch extends Component {
    constructor(props){
        super(props);
        this.state = { 
            moviesSearch: [],
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // console.log("event:", event.target.value)
        this.setState({value: event.target.value});
    }
    handleSubmit() {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
        const url = ("https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query="+this.state.value)
        console.log("url",url)
        fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          moviesSearch: json.results,
        });
        console.log('movie search:', json )
      });
    }

    render() {
        const { moviesSearch } = this.state;

        // console.log("moviesSearch:",moviesSearch)

        return (
            <div>
                <h1>Hollywood movies</h1>

        <form onSubmit={this.handleSubmit}>
            <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <button type="submit">Search Movie </button>
        </form>
        <div className="pop-movies">
            {moviesSearch.map((movieSearched, key) =>
                <MovieList
                movie={movieSearched}
                />    
            )}
        </div>
        </div>
        );
        }
}
export default MoviesSearch;