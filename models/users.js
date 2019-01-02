'use strict'
const bcrypt = require('bcryptjs');

class Users{

  constructor(db){
    this.db = db
    this.ref = this.db.ref('/')
    this.collection = this.ref.child('users')

  }
  async create ( data){
    data.password = await this.constructor.encrypt( data.password)
    
    const newUser = this.collection.push()
    newUser.set( data )
    return newUser.key
  }

  static async encrypt(password){
    const salt = 10    
    const hashedPassword = await bcrypt.hash( password, salt)
    return hashedPassword
  
    return hashedPassword
  }
}
module.exports = Users 