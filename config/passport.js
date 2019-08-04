const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const passport = require('passport')

//loading user model
const db = require("../models");

passport.use(
        new LocalStrategy({usernameField: 'userName'},(userName, password, done) => {

            db.User.findOne({userName: userName})
            .then(user => {
                if (!user){
                    return done('That username does not exist.', null)
                }
               console.log(password)
               console.log(user.password)
                //match password
                bcrypt.compare(password, user.password, (err, isMatch)=>{
                    if(err) throw err;
  
                    if(isMatch) {
                        return done(null, user)
                    }else{
                        return done(null, false, {message: 'Password incorrect'})
                    }
                })
            }).catch(err => console.log(err))









           // db.User.findOne({userName: userName}).lean().exec((err, user) =>{
           //     if(err){
           //         return done(err, null)
           //     }

            //    if (!user){
            //        return done(null, false, {message: 'That username does not exist.'})
            //    }

            //    const isPasswordValid = bcrypt.compareSync(password, user.password)
            //    if(!isPasswordValid) {
            //        return done('Email or Password not valid', null)
            //    }
           // })
           //return done(null, user)
        }))
       
            //matching user
        /*db.User.findOne({userName: userName})
          .then(user => {
              if (!user){
                  return done(null, false, {message: 'That username does not exist.'})
              }
             console.log(password)
             console.log(user.password)
              //match password
              bcrypt.compare(password, user.password, (err, isMatch)=>{
                  if(err) throw err;

                  if(isMatch) {
                      return done(null, user)
                  }else{
                      return done(null, false, {message: 'Password incorrect'})
                  }
              })
          }).catch(err => console.log(err))*/
        



    passport.serializeUser(function(user, done){
        done(null, user.id)
    })

    passport.deserializeUser(function(id, done){
        db.User.findById(id, function(err, user){
            done(err, user)
        })
    })
module.exports = passport