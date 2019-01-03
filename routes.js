'use strict'
//Controllers
const site = require('./controllers/site')
const user = require('./controllers/user')

//Validations
const Joi = require('joi')

module.exports = [
  //Routes for Hapi
  //Root

  {
    method: 'GET',
    path: '/',
    handler: site.home
  },
  //Views - In only API Mode is not needed
  //Register View
  {
    method: 'GET',
    path: '/register',
    handler: site.register   
  },
  //Login View
  {
    method: 'GET',
    path: '/login',
    handler: site.login   
  },
  //Controllers of Requests
  //Request Register User
  {
    method: 'POST',
    path: '/create-user',
    options: { //This is for validations using Joi
      validate: {
        payload: {
          name: Joi.string().required().min(3),
          email: Joi.string().required().email(),
          password: Joi.string().required().min(6)

        }
      }
    },
    handler: user.createUser
  },

  //Request Login User
  {
    method: 'POST',
    path: '/validate-user',
    options: { //This is for validations using Joi
      validate: {
        payload: {          
          email: Joi.string().required().email(),
          password: Joi.string().required().min(6)

        }
      }
    },
    handler: user.validate
  },

  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        index: ['index.html']
      }
    }
  }

]