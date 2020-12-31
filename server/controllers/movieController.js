const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');
const axios = require('axios');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre

    // https://www.themoviedb.org/account/signup
    // get your API KEY

    // use this endpoint to search for movies by genres, you will need an API key

    // https://api.themoviedb.org/3/discover/movie

    // and sort them by horrible votes using the search parameters in the API

    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=3153257f2189729bf3d0a8c223306f17&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14')
    //need to interpolate genre id into get request
    .then((results) => {res.status(200).json(results)})
    .catch((err) =>{return err;})
    //may have to send back only results.results
    //can also apply pagination filter
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres

    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list

    // send back
    apiHelpers.getGenresFromAPI((err, results) => {
      if (err) {
        throw err;
      } else {
        res.status(200).json(results)
      }
    });
  },

  saveMovie: (req, res) => {
    //this will use the model layer
  },

  deleteMovie: (req, res) => {
    //this will use the model layer
  }
}