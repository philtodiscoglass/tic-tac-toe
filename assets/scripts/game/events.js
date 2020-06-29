'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
// const getFormFields = require('./../../../lib/get-form-fields')

const onNewGame = function (event) {
  event.preventDefault()
  $('.col-4').text('')
  currentPlayer = 'X'
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

let currentPlayer = 'X'

const onUpdateGame = function (event) {
  event.preventDefault()
  const cell = [$(event.target).data('cell-index')]
  if ($(event.target).text() === '') {
    store.game.cells[cell] = currentPlayer
    $(event.target).text(currentPlayer)
    if (store.game.over === true) {
      $(event.target).text('')
      return
    } if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
    $('#message').show().text(`Your turn ${currentPlayer}!`)
  } else {
    $('#message').show().text('Spot taken, choose a free space!')
    return 'invalid move'
  }
  api.updateGame(cell, currentPlayer, store.game.over)
    .then(ui.onUpdateGameSuccess)
    .then(whoWon())
    .then(ui.onGameOver)
    .catch(ui.onUpdateGameFailure)
}

const whoWon = function () {
  const isATie = (tie) => tie !== ''
  if (store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') {
    $('#message').show().text('X Wins!')
    store.game.over = true
  } else if (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') {
    $('#message').show().text('X Wins!')
    store.game.over = true
  } else if (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') {
    $('#message').show().text('X Wins!')
    store.game.over = true
  } else if (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') {
    $('#message').show().text('X Wins!')
    store.game.over = true
  } else if (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') {
    $('#message').show().text('X Wins!')
    store.game.over = true
  } else if (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') {
    $('#message').show().text('X Wins!')
    store.game.over = true
  } else if (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') {
    $('#message').show().text('X Wins!')
    store.game.over = true
  } else if (store.game.cells[2] === 'X' && store.game.cells[4] === 'X' && store.game.cells[6] === 'X') {
    $('#message').show().text('X Wins!')
    store.game.over = true
  } else if (store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') {
    $('#message').show().text('O Wins!')
    store.game.over = true
  } else if (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') {
    $('#message').show().text('O Wins!')
    store.game.over = true
  } else if (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') {
    $('#message').show().text('O Wins!')
    store.game.over = true
  } else if (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') {
    $('#message').show().text('O Wins!')
    store.game.over = true
  } else if (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') {
    $('#message').show().text('O Wins!')
    store.game.over = true
  } else if (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') {
    $('#message').show().text('O Wins!')
    store.game.over = true
  } else if (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') {
    $('#message').show().text('O Wins!')
    store.game.over = true
  } else if (store.game.cells.every(isATie)) {
    store.game.over = true
    $('#message').show().text(`It's a tie!`)
  } return ('')
}

const onShowGames = function () {
  event.preventDefault()
  api.showGames()
    .then(ui.onShowGamesSuccess)
    .catch(ui.onShowGamesFailure)
}
module.exports = {
  onNewGame: onNewGame,
  onUpdateGame: onUpdateGame,
  whoWon: whoWon,
  onShowGames: onShowGames
}
