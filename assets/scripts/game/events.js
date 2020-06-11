'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
// const getFormFields = require('./../../../lib/get-form-fields')

const onNewGame = function (event) {
  event.preventDefault()
  currentPlayer = 'X'
  $('.col-4').text('')
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

let currentPlayer = 'X'

const onUpdateGame = function (event) {
  event.preventDefault()
  // if (currentPlayer !== 'X' || 'O') {
  // store.game.cells[$(event.target).data('cell-index')] = currentPlayer
  // }

  console.log($(event.target).data('cell-index'))
  console.log(store.game.cells)

  if ($(event.target).text() === '') {
    store.game.cells[$(event.target).data('cell-index')] = currentPlayer
    $(event.target).text(currentPlayer)
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
  } else {
    $('#message').show().text('Invalid move')
    return 'invalid move'
  }

  api.updateGame()
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

module.exports = {
  onNewGame: onNewGame,
  onUpdateGame: onUpdateGame
}
