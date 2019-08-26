
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require('../config/passport')
const usersController = require('../controllers/usersController')
const path = require('path')

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
//router.use(function(req, res) {
// res.send("Sorry");
//});



router.get( '*', function(req, res) {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
 });
 


//login handler
router.post('/login', (req, res, next) => {
  passport.authenticate('local', function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: "something happened",
        error: error.message
      })
    }
    //for persistant login
    req.login(user, (error) => {
      if (error) {
        return res.status(500).json({
          message: error || "Oops, something happened!"
        })
      }

      return res.json(user)

    })
  })(req, res, next)
})


router.get('/hello', (req, res) => {
  const userName = req.user.userName
  res.json({
    userName: userName
  })
})

router.route('/invite')
  .post(usersController.updateInvitations)

router.route('/putInvite')
  .post(usersController.putInvite)

router.route('/findInvites')
  .post(usersController.findInvites)

router.route('/findUserName')
  .post(usersController.findUserName)

router.route('/acceptedInvite')
  .post(usersController.acceptedInvite)

router.route('/findUpcoming/:userName')
  .get(usersController.findUpcoming)

router.route('/makePast')
  .post(usersController.makePast)

router.route('/findUserName2')
  .post(usersController.findUserName)

router.route('/findUserName3')
  .post(usersController.findUserName)

router.route('/updateRate')
  .post(usersController.updateRate)

router.route('/updateRate2')
  .post(usersController.updateRate2)

router.route('/buttonClicked')
  .post(usersController.buttonClicked)

router.route('/buttonClicked2')
  .post(usersController.buttonClicked2)

router.route('/email')
  .post(usersController.email)

router.route('/updateUser')
  .post(usersController.updateUser)

module.exports = router;