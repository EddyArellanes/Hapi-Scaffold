'use strict'
const site = require('./controllers/site')
const user = require('./controllers/user  ')


module.exports = [
  //Routes for Hapi
  //Root
  {
    method: 'GET',
    path: '/',
    handler: site.home()
  },
  //Register View
  {
    method: 'GET',
    path: '/register',
    handler: site.register()    
  },
  //Post Register User
  {
    method: 'POST',
    path: '/create-user',
    handler: user.createUser()
  },
  {
    method: 'GET',
    path: '/api/examples/string',
    handler: ( request, h ) =>{
      //h have h.response and h.redirect
      return h.response("Hello World").code(200)
    }
  },

]