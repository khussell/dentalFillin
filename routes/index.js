
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require('../config/passport')

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
//router.use(function(req, res) {
 // res.send("Sorry");
//});




//login handler
router.post('/login', (req,res, next) => {
  passport.authenticate('local', function(error, user, info){
      if(error){
        return res.status(500).json({
          message: "something happened",
          error: error.message 
        })
      }

      return res.json(user)
  })(req,res, next)
})



module.exports = router;