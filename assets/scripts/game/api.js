const config = require('./../config')
const store = require('./../store')

const newGame = function (data) {
  console.log(data)
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
  console.log('this is')
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

module.exports = {
  newGame: newGame,
  updateGame: updateGame
}
