const router = require('express').Router();



let userSignup = require('../models/model.user');

router.route('/signup').post((req, res) => {
    const userdetails = req.body;

    //console.log(userdetails)

  const newUser = new userSignup(userdetails);
    
  
  newUser.save()
    .then(() => res.json('Account has been created Succesfully'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;