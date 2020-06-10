'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#new-game').on('submit', gameEvents.onNewGame)
  $('.col-4').on('click', gameEvents.onUpdateGame)
  $('#new-game').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.container').hide()
})
