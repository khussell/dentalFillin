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



  findByNotSub: function(req,res) {
    console.log(req.query)
    db.User.find({sub: ""})
          .sort({starRating: 1})
          .then(dbModel =>{
            console.log(dbModel)
            res.json(dbModel)})
          .catch(err => res.status(422).json(err));
  },

  findByIsSub: function(req, res){
    console.log(req.query)
    db.User.find({sub: 'true'})
      .sort({starRating: 1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  findAllOfficesFromDate: function(req, res){
    console.log(req.body.date.date[0])
    let date = req.body.date.date[0]
      db.User.find({datesNeeded: { "$in" : [date]}})
             .sort({starRating: 1})
             .then(dbModel => res.json(dbModel))
  },

  findAllSubsFromDate: function(req, res){
    console.log(req.body.date.date[0])
    let date = req.body.date.date[0]
      db.User.find({avail: { "$in" : [date]}})
             .sort({starRating: 1})
             .then(dbModel => res.json(dbModel))
  },

  findByUserName: function(req,res){
    console.log(req.params.user)
    let user = req.params.user
    db.User.findOne({userName: user}).then(dbModel => res.json(dbModel))
  },

  updateInvitations: function(req, res) {
    console.log("here")
   // console.log(req)
    console.log(req.body)
    let info = {
      inviter: req.body.info.inviter,
      date: req.body.info.date,
      invitee : req.body.info.invitee
    }
    console.log(info)
    
    db.User.findOneAndUpdate({userName : info.invitee}, { $push : {"invitations" : info}}).then(dbModel =>res.json(dbModel))

  },

  putInvite: function(req, res) {
    console.log("here")
   // console.log(req)
    console.log(req.body)

    let info = {
      inviter: req.body.info.inviter,
      date: req.body.info.date,
      invitee : req.body.info.invitee
    }
    console.log(info)
    
    db.User.findOneAndUpdate({officeName : req.body.info.inviter}, { $push : {"invitations" : info}}).then(dbModel =>res.json(dbModel))

  },

  findInvites: function(req, res){
    console.log('here')
    console.log(req.body.userName)

    db.User.find({userName: req.body.userName}).then(dbModel =>res.json(dbModel))
  },

  findUserName: function(req, res){
    console.log(req.body.userName)

    db.User.findOne({officeName: req.body.userName}).then(dbModel => res.json(dbModel))
  },


  acceptedInvite: function(req,res){
    console.log(req.body.invite)
    db.User.findOneAndUpdate({officeName: req.body.invite.inviter},{ $push : {"currentSubs" : req.body.invite}}).then(dbModel =>{
      db.User.findOneAndUpdate({userName: req.body.invite.invitee},{ $push : {"currentJobs" : req.body.invite}}).then(dbModel =>{
        db.User.findOneAndUpdate({officeName: req.body.invite.inviter}, {$pull: {"invitations" : {date: req.body.invite.date} }},  { safe: true, multi:true }).then(dbModel =>{
          db.User.findOneAndUpdate({userName: req.body.invite.invitee}, {$pull: {"invitations" : {date: req.body.invite.date} }},  { safe: true, multi:true }).then(dbModel =>{
            res.json(dbModel)
          })
        })
      })
    })
  },

  findUpcoming: function(req, res){
    let userName= req.params.userName
    db.User.find({userName: userName}).then(dbModel => res.json(dbModel))
  },

  
  makePast: function(req,res){
    console.log(req.body.past)
    db.User.findOneAndUpdate({officeName: req.body.past.inviter},{ $push : {"pastSubs" : req.body.past}}).then(dbModel =>{
      db.User.findOneAndUpdate({userName: req.body.past.invitee},{ $push : {"pastJobs" : req.body.past}}).then(dbModel =>{
        db.User.findOneAndUpdate({officeName: req.body.past.inviter}, {$pull: {"currentSubs" : {date: req.body.past.date} }},  { safe: true, multi:true }).then(dbModel =>{
          db.User.findOneAndUpdate({userName: req.body.past.invitee}, {$pull: {"currentJobs" : {date: req.body.past.date} }},  { safe: true, multi:true }).then(dbModel =>{
            res.json(dbModel)
          })
        })
      })
    })
  },

  findUserName2: function(req, res){
    console.log(req.body.userName)

    db.User.findOne({officeName: req.body.userName}).then(dbModel => res.json(dbModel))
  },

  //email: function(req,res){
  //  console.log(req.body.email)
  //}
};



     /*   
        const parseDates = function(arr){
            let needed=[]
            for (let i = 0; i < arr.length; i++) {
                let splitStr = arr[i].split('')
                
                
                for (let j = 0; j < splitStr.length; j++) {
                    if (splitStr[j] === "T") {
                        let fixedDate =splitStr.slice(0, 10)
                        let join =fixedDate.join('')
                         needed.push(join)
                        
                    }
                }

            }
            return needed
        }
        */