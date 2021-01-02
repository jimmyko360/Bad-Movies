//Select one db to work with:

//For SQL
const sqlDb = require('../../db/sql');
//For Mongo
// const mongoDb = require('../../db/mongodb')

//this is where the sql queries go
module.exports = {
  addToFavorites: function(params, callback) {
    //although query is async, it does NOT return a promise so you can't do the chaining
    sqlDb.connection.query('INSERT INTO favorites (poster_path, original_title, release_date, vote_average, genre_ids, id) VALUES (?, ?, ?, ?, ?, ?)', params, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  deleteFromFavorites: function(params, callback) {
    sqlDb.connection.query('DELETE FROM favorites WHERE id = ?', params, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getFavesFromDB: function(callback) {
    sqlDb.connection.query('SELECT * FROM favorites', (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }

}