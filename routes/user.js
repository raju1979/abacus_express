const express = require('express');
const router = require('express-promise-router')();


const passport = require('passport');
// const passportConf = require('../passport');

const { validateBody, schemas } = require('../helpers/routeHelpers');
const UserController = require('../controllers/userController');


router.route('/signup')
  .post(validateBody(schemas.signupSchema),UserController.signUp);


module.exports = router;