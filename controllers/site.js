'use strict'
function home(request, h ){

  return h.view( 'index', {
    title: 'Home'
  })
}

function register(req, h){
  
  return h.view('register', {
    title: 'Registro'
  })
}
function login(req, h){
  
  return h.view('login', {
    title: 'Iniciar Sesión'
  })
}

module.exports = {
  home,
  register,
  login
  
}