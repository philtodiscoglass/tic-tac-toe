'use strict'

const store = require('./../store')

const onNewGameSuccess = function (response) {
  console.log(response)
  store.game = response.game
  $('#message').text('New game created!')
  $('.container').show()
}

const onNewGameFailure = function (response) {
  $('#message').text('New game failed')
}

const onUpdateGameSuccess = function (response) {
  $('#message').text('Update worked')
}

const onUpdateGameFailure = function (response) {
  $('#message').text('Update failed')
}

module.exports = {
  onNewGameSuccess: onNewGameSuccess,
  onNewGameFailure: onNewGameFailure,
  onUpdateGameSuccess: onUpdateGameSuccess,
  onUpdateGameFailure: onUpdateGameFailure
}
