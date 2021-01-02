//IF you are using OPTION 2 under server/index.js, then refer to this file

const router = require('express').Router();
const movieController = require('../controllers/movieController.js');

//Route different requests to different endpoints
// can this be achieved without a path parameter?
router.get('/search/:id', movieController.getSearch)
router.get('/genres', movieController.getGenres)
router.post('/save', movieController.saveMovie)
router.delete('/delete', movieController.deleteMovie)

//how would I accomplish this without a get request to the database?
router.get('/save', movieController.getFavorites)

module.exports = router;