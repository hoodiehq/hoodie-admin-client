var test = require('tape')

var deserialise = require('../../account/utils/deserialise')

var options = {
  include: 'profile'
}
var accountsWithProfileResponse = require('../fixtures/accounts-with-profile.json')
var accountsWithProfileReturn = require('../fixtures/accounts-with-profile-return.json')
var sessionsWithProfile = require('../fixtures/sessions-with-profile.json')
var sessionsWithProfileReturn = require('../fixtures/sessions-with-profile-return.json')
var accounts = require('../fixtures/accounts-with-missing-includes.json')
var accountsReturn = require('../fixtures/accounts-return.json')

test('throws error on non-JSON API response', function (t) {
  t.throws(deserialise.bind(null, {}, options), 'throws an error')

  t.end()
})

test('accounts with profile response', function (t) {
  var data = deserialise(accountsWithProfileResponse, {
    include: 'profile'
  })

  t.deepEqual(data, accountsWithProfileReturn, 'returns right data')

  t.end()
})

test('Session with account->profile', function (t) {
  var data = deserialise(sessionsWithProfile, {
    include: 'account.profile'
  })

  t.deepEqual(data, sessionsWithProfileReturn, 'returns right data')

  t.end()
})

test('accounts with missing includes', function (t) {
  var data = deserialise(accounts, options)

  t.deepEqual(data, accountsReturn, 'returns right data')

  t.end()
})
