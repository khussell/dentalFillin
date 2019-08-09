
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require('../config/passport')
const usersController = require('../controllers/usersController')

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
      //for persistant login
      req.login(user, (error) => {
         if(error) {
           return res.status(500).json({
             message: error || "Oops, something happened!"
           })
         }
         
         return res.json(user)
               
      })
  })(req,res, next)
})


router.get('/hello', (req, res)=>{
  const userName = req.user.userName
  res.json({
    userName : userName
  })
})

router.route('/invite')
.get(usersController.updateInvitations)



module.exports = router;