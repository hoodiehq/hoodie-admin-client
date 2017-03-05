var simple = require('simple-mock')
var store = require('humble-localstorage')
var test = require('tape')

var AccountAdmin = require('../../')

test('new AccountAdmin(options)', function (t) {
  var accountAdmin = new AccountAdmin({
    url: 'http://localhost:3000'
  })

  t.is(typeof accountAdmin, 'object', 'AccountAdmin is a constructor')

  t.is(typeof accountAdmin.signUp, 'undefined', 'accountAdmin.signIn is undefined')
  t.is(typeof accountAdmin.signIn, 'function', 'accountAdmin.signIn is a function')
  t.is(typeof accountAdmin.signOut, 'function', 'accountAdmin.signOut is a function')

  t.is(typeof accountAdmin.accounts.add, 'function', 'accountAdmin.accounts.add is a function')
  t.is(typeof accountAdmin.accounts.find, 'function', 'accountAdmin.accounts.find is a function')
  t.is(typeof accountAdmin.accounts.findAll, 'function', 'accountAdmin.accounts.findAll is a function')
  t.is(typeof accountAdmin.accounts.update, 'function', 'accountAdmin.accounts.update is a function')
  t.is(typeof accountAdmin.accounts.remove, 'function', 'accountAdmin.accounts.remove is a function')
  t.is(typeof accountAdmin.accounts.on, 'function', 'accountAdmin.accounts.on is a function')
  t.is(typeof accountAdmin.accounts.one, 'function', 'accountAdmin.accounts.one is a function')
  t.is(typeof accountAdmin.accounts.off, 'function', 'accountAdmin.accounts.off is a function')

  t.is(typeof accountAdmin.on, 'function', 'has "on()"')
  t.is(typeof accountAdmin.one, 'function', 'has "one()"')
  t.is(typeof accountAdmin.off, 'function', 'has "off()"')

  accountAdmin.ready.then(function () {
    t.ok(accountAdmin.hasOwnProperty('username'), 'accountAdmin.username exists')
    t.is(accountAdmin.username, undefined, 'accountAdmin.username is undefined')

    t.end()
  })
})

test('AccountAdmin(options) w/o new', function (t) {
  var accountAdmin = AccountAdmin({
    url: 'http://localhost:3000/session/account'
  })

  t.is(typeof accountAdmin, 'object', 'AccountAdmin is a constructor')

  t.end()
})

test('new HoodieAdmin(options)', function (t) {
  store.clear()
  store.setObject('account_admin', {username: 'admin', session: {id: 'session123'}})
  simple.mock(global, 'location', {origin: 'http://example.com'})
  var account = new AccountAdmin()

  account.ready.then(function () {
    simple.restore()
    t.is(account.username, 'admin', 'sets username from localStorage')
    t.end()
  })
})
