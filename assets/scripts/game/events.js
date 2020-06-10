'use strict'

const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('./../../../lib/get-form-fields')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  console.log($(event.target).data('cell-index'))
  api.updateGame()
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

module.exports = {
  onNewGame: onNewGame,
  onUpdateGame: onUpdateGame
}
