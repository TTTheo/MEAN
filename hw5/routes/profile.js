const router = require('express').Router() ;

const authCheck = (req, res, next) => {
  if(!req.user){
    res.redirect('/sheet');
  }else {
    next() ;
  }
} ;

router.get('/', authCheck, (req,res) => {
  res.send("You are logged in with Google, this is your profile: " + req.user.username);
});


module.exports = router ;
