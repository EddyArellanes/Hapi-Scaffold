'use strict'

function createUser(request, h ){
  console.log(request.payload)
  return 'Listo :::D'
}

module.exports = {
  createUser
}