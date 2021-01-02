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
      favorites: [{deway: "favorites"}],
      showFaves: false,
    };

    this.swapFavorites = this.swapFavorites.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }
// get request using genre ID as a filter is not working here or on componentDidMount
  getMovies(id) {
    // make an axios request to your server on the GET SEARCH endpoint
    axios.get(`/movies/search/${id}`)
    .then((results)=>{
      this.setState({movies:results.data})})
      // console.log('state', this.state.movies)})
    .catch((error)=>{throw error;})
  }

  saveMovie(event) {
    // same as above but do something diff
    // axios.post('/movies/save', {name: event.target.id})
    // .then(axios.get('/movies/'))
    // .catch((error)=>{throw error})
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  componentDidMount() {
    this.getMovies(16);
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>

        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies={this.getMovies}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));