const request = require('request');
//I don't think we need to use request at all
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

//do i use this to interpolate genre id's into the discover/movies GET request?
module.exports = {
  getGenresFromAPI: function(callback) {
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=3153257f2189729bf3d0a8c223306f17&language=en-US')
    //NEED TO HAVE NULL AS FIRST ARGUMENT HERE
    .then((results) => {callback(null, results.data.genres)})
    .catch((err) =>{callback(err)})
    //may need to send back results.body.genres
  },

  getMoviesByGenre: function() {

  }
}