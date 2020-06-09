'use strict'

const config = require('./../config')
// const store = require('./../store')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: {
      credentials: {
        email: formData.credentials.email,
        password: formData.credentials.password,
        password_confirmation: formData.credentials.password
      }
    }
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: {
      credentials: {
        email: formData.credentials.email,
        password: formData.credentials.password
      }
    }
  })
}

const signOut = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out'
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  signOut: signOut
}
