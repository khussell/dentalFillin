const db = require("../models");
const bcrypt = require('bcryptjs') 

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    let userInfo = req.body
    
    bcrypt.genSalt(10, (err,salt)=> bcrypt.hash(userInfo.password, salt, (err, hash) =>{
      if(err) throw err
      console.log(hash)
      userInfo.password = hash
      console.log(userInfo)
      db.User
      .create(userInfo)
      .then(dbModel => res.redirect('/login'))
      .catch(err => res.status(422).json(err));
    }))
  
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },



  findByIsSub: function(req,res) {
    console.log(req.query)
    db.User.find({})
          .sort({starRating: 1})
          .then(dbModel =>{
            console.log(dbModel)
            res.json(dbModel)})
          .catch(err => res.status(422).json(err));
  }
};