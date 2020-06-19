
const router = require('express').Router();

let movie = require('../models/model.movie');



router.route('/').get((req, res) => {
  movie.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) => {
  movie.findByIdAndDelete(req.params.id)
    .then(() => res.json('moviedeleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res)=>{
  movie.findById(req.params.id)
  .then(movie=>res.json(movie))
  .catch(err=>res.status(400).json('Error: '+err))

});


router.route('/update/:id').post((req, res) => {
  console.log(req.body)
  movie.findById(req.params.id)
    .then(movies => {
      movies.moviename=req.body.moviename
      movies.duration=Number(req.body.duration)
      movies.ratings=Number(req.body.ratings)
      movies.director=req.body.director,
      movies.actors=req.body.actors,
      
       movies.description=req.body.description,
       movies.generes=req.body.generes,
      movies.language=req.body.language,
      movies.releasedate=Date.parse(req.body.releasedate)

      movies.save()
        .then(() => res.json('Successfull'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/addmovie').post(async (req, res) => {
  
    const movies = req.body;

    console.log(movies.releasedate)

  const newMovie = new movie(movies);
    
  
  newMovie.save()
    .then(() => res.json('Successfull'))
    .catch(err => res.status(400).json('Error: ' + err));




  
  
});


module.exports = router;