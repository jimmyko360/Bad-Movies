import React from 'react';
const axios = require('axios');

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
    };
    this.getGenres = this.getGenres.bind(this);
    this.getGenreId = this.getGenreId.bind(this);
  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios.get('/movies/genres')
    .then((results)=>{this.setState({genres:results.data})})
    .catch((error)=>{throw error})
  }

  getGenreId(callback) {
    let genre = document.getElementById('selectedgenre').value;
    for (let x = 0; x < this.state.genres.length; x++) {
      if (this.state.genres[x].name === genre) {
        callback(this.state.genres[x].id);
      }
    }
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select id='selectedgenre'>
          {/* you have to return the output of each map iteration */}
          {/* onClick does not work on options tags? */}
          {this.state.genres.map((genre)=>(<option key={genre.id}>{genre.name}</option>))}
        </select>
        <br/><br/>
        {/* search button is not working */}
        <button onClick={()=>{this.getGenreId(this.props.getMovies)}}>Search</button>

      </div>
    );
  }

  componentDidMount() {
    this.getGenres();
  }
}

export default Search;