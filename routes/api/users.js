const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require('passport')


// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

    //matches "/api/users/allOffices"
    router.route('/allOffices')
    .get(usersController.findByNotSub)

    router.route('/allSubs')
      .get(usersController.findByIsSub)

    router.route('allOfficesFromProfileDates')
       .get(usersController.findAllOfficesFromProfile)

    router.route('allSubsFromProfileDates')
       .get(usersController.findAllSubsFromProfile)

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);




module.exports = router;