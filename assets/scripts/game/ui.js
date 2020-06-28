'use strict'

const store = require('./../store')

const onNewGameSuccess = function (response) {
  store.game = response.game
  $('#message').text('New game created, your turn X!')
  $('.container').show()
}

const onNewGameFailure = function (response) {
  $('#message').text('New game failed')
}

const onUpdateGameSuccess = function (response) {

}

const onUpdateGameFailure = function (response) {
  $('#message').text('Update failed')
}

const onGameOver = function () {
}

module.exports = {
  onNewGameSuccess: onNewGameSuccess,
  onNewGameFailure: onNewGameFailure,
  onUpdateGameSuccess: onUpdateGameSuccess,
  onUpdateGameFailure: onUpdateGameFailure,
  onGameOver: onGameOver
}
