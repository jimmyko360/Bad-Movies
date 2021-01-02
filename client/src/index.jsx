import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [{deway: "movies"}],
      favorites: [],
      showFaves: false,
    };

    this.swapFavorites = this.swapFavorites.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  getMovies(id) {
    axios.get(`/movies/search/${id}`)
    .then((results)=>{
      this.setState({movies:results.data})})
      // console.log('state', this.state.movies)})
    .catch((error)=>{throw error;})
  }

  saveMovie(movie) {
    axios.post('/movies/save', {
      poster_path: movie.poster_path,
      original_title: movie.original_title,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      genre_ids: JSON.stringify(movie.genre_ids),
      id: movie.id
    })
    .then(axios.get('/movies/save')
    .then((results)=>{console.log('get favorites:', results); this.setState({favorites:results.data})})
    .catch(err=>{throw err}))
    .catch((error)=>{throw error})
  }

  deleteMovie(movie) {
    axios.delete(`/movies/delete/${movie.id}`)
    .then(axios.get('/movies/save')
    .then((results)=>{console.log('delete favorite:', results); this.setState({favorites:results.data})})
    .catch(err=>{throw err}))
    .catch(err=>{throw err})
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
    // console.log('state:', this.state)
  }

  componentDidMount() {
    this.getMovies(28);
    axios.get('/movies/save')
    .then((results)=>{this.setState({favorites:results.data})})
    .catch(err=>{throw err});
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>

        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies={this.getMovies}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves} saveMovie={this.saveMovie} deleteMovie={this.deleteMovie}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));