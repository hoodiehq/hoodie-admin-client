/* global location */
module.exports = HoodieAdmin

var AccountAdmin = require('./account')

function HoodieAdmin (options) {
  var url = options && options.url ? options.url : getCurrentOrigin()

  return new AccountAdmin({url: url + '/hoodie/account/api'})
}

function getCurrentOrigin () {
  return typeof location !== 'undefined' ? location.origin : undefined
}
