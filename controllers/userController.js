const JWT = require('jsonwebtoken')

const User = require('../models/user_model');

signToken = (user) => {
  return JWT.sign({
    iss: user.email,
    sub: user.id,
    name: user.displayName,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1)
  }, 'secret')
}

module.exports = {
  root: async (req, res, next) => {
    res.json({
      'message': 'this is user home'
    })
  },
  signIn: async (req, res, next) => {
    console.log('sign in cuess');
    const TOKEN = signToken(req.body)

    console.log(TOKEN);
    res.status(200).json({
      'message': 'login called',
      'token': TOKEN
    })
  },
  signUp: async (req, res, next) => {
    const {email,displayName} = req.body;
    console.log(email,displayName)
    // check existing user
    const exitingUserPromise = User.findOne({email:email}).exec();
    exitingUserPromise.then((data) => {
      if(data !== null){
        res.status(200).send({
          "token": signToken(data)
        });
      }
    })

    const user = new User(req.body);
    user.save()
      .then((data) => {
        res.status(200).send({
          "token": signToken(data)
        });
      })
      
  },
  secret:async (req,res,next) => {
    res.send('I come to secret');
  }
}