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

    apiHelpers.getMoviesByGenre(req.params.id, (err, results) => {
      if (err) {
        throw err;
      } else {
        // console.log('req',req.params)
        res.status(200).json(results);
      }
    })
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
    movieModel.addToFavorites([
      req.body.poster_path,
      req.body.original_title,
      req.body.release_date,
      req.body.vote_average,
      req.body.genre_ids,
      req.body.id
    ], (err, results) => {
      if (err) {
        throw err;
      } else {
        res.status(201).json(results)
      }
    })
  },

  deleteMovie: (req, res) => {
    //this will use the model layer
    movieModel.deleteFromFavorites([req.params.id], (err, results) => {
      if (err) {
        throw err;
      } else {
        res.status(204).json(results)
      }
    })
  },

  getFavorites: (req, res) => {
    movieModel.getFavesFromDB((err, results)=>{
      if (err) {
        throw err;
      } else {
        // console.log('faveDB results:', results[0].id)
        res.status(200).json(results)
      }
    })
  }
}