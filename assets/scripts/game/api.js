const config = require('./../config')
const store = require('./../store')

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateGame = function (cells, currentPlayer) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: cells,
          value: currentPlayer
        },
        over: store.over
      }
    }
  })
}

const showGames = function (status) {
  return $.ajax({
    url: config.apiUrl + '/games',
    medthod: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame: newGame,
  updateGame: updateGame,
  showGames: showGames
}
