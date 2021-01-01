import React from 'react';
const axios = require('axios');

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      selected: 12
    };
    this.getGenres = this.getGenres.bind(this);
    this.selectGenre = this.selectGenre.bind(this);
  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios.get('/movies/genres')
    .then((results)=>{this.setState({genres:results.data})})
    .catch((error)=>{throw error})
  }

  //how can I configure this component without adding another state property?
  selectGenre(event) {
    console.log(event.target.id)
    this.setState({selected: event.target.id})
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select>
          {/* you have to return the output of each map iteration */}
          {/* onClick does not work on options tags? */}
          {this.state.genres.map((genre)=>(<option onClick={this.selectGenre} id={genre.id}>{genre.name}</option>))}
        </select>
        <br/><br/>
        {/* search button is not working */}
        <button onClick={()=>{this.props.getMovies(14)}}>Search</button>

      </div>
    );
  }

  componentDidMount() {
    this.getGenres();
  }
}

export default Search;