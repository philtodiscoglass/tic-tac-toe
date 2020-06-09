'use strict'

// const store = require('./../store')

const onSignUpSuccess = function (response) {
  console.log(response)
  $('#message').text('You have signed up succesfully, ' + response.user.email)
  $('form').trigger('reset')
}

const onSignUpFailure = function (response) {
  $('#message').text('Sign up failed')
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  console.log(response)
  $('#message').text('You have signed in, ' + response.user.email)
  $('form').trigger('reset')
}

const onSignInFailure = function (response) {
  $('#message').text('Sign in failed')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure
}
