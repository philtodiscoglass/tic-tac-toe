'use strict'

// const store = require('./../store')

const onNewGameSuccess = function (response) {
  console.log(response)
  $('#message').text('New game created!')
  $('form').trigger('reset')
}

const onNewGameFailure = function (response) {
  $('#message').text('New game failed')
  $('form').trigger('reset')
}

module.exports = {
  onNewGameSuccess: onNewGameSuccess,
  onNewGameFailure: onNewGameFailure
}
