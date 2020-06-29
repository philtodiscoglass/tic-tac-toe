'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('You have signed up succesfully, ' + response.user.email)
  $('form').trigger('reset')
  $('#sign-in').show()
  $('#sign-up').hide()
}

const onSignUpFailure = function (response) {
  $('#message').text('Sign up failed')
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('You have signed in, ' + response.user.email)
  $('form').trigger('reset')
  $('#new-game').show()
  $('#show-games').show()
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
}

const onSignInFailure = function (response) {
  $('#message').text('Sign in failed')
  $('form').trigger('reset')
}

const onSignOutSuccess = function (response) {
  $('#message').text('You have signed out')
  $('form').trigger('reset')
  $('#new-game').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('.container').hide()
  $('#show-games').hide()
}

const onSignOutFailure = function (response) {
  $('#message').text('Sign out failed')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('You have changed your password')
  $('form').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').text('Password change failed')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure,
  onSignOutSuccess: onSignOutSuccess,
  onSignOutFailure: onSignOutFailure,
  onChangePasswordSuccess: onChangePasswordSuccess,
  onChangePasswordFailure: onChangePasswordFailure
}
