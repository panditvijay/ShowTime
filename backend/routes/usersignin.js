
const router = require('express').Router();
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const SECRET_KEY = "secretkey23456";
let userSignin = require('../models/model.user');





router.route('/signin').post(async (req, res) => {
  
  const {email,password}=req.body;
  

  try{
 
  

   let userdetails= await userSignin.findOne({email})
  
   //console.log(userdetails)
   if(bcrypt.compareSync(password, userdetails.password)){

    const token = jwt.sign({id: userdetails._id}, SECRET_KEY, { expiresIn: '1h' });
    res.json({status:"success", message: "user found!!!", data:{user: userdetails, token:token}});
  
  }else{
    res.json({status:"error", message: "Invalid email/password!!!", data:null});
  }
}
   

  
//let userdetails
catch(error) {
    res.status(500).send("Server Error!!!");
}




  
  
});


module.exports = router;