'use strict'
function home(request, h ){
  //The Magic of Vision will inject the variables into Hbs files
  return h.view( 'index', {
    title: 'Home'
  })
}

function register(req, h){
  return h.view('register', {
    title: 'Registro'
  })
}

module.exports = {
  register
}