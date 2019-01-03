'use strict'
const users = require('../models/index').users

async function createUser(request, h ){
  let result
  try{
    result = await  users.create( request.payload)
    return h.response(`User Created ID ${result}`)
  }catch( error){
    console.error( error)
    return h.response('No se pudo generar chavo').code(500)
  }
}

async function validate(request, h){
  let result
  
  try{
    result = await users.validate( request.payload)
    return result
  }catch( error){
    console.error( error)
    return h.response('No se pudo comprobar al Usuario :Pn').code(500)
  }
}

module.exports = {
  createUser,
  validate
}