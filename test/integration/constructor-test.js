var simple = require('simple-mock')
var store = require('humble-localstorage')
var test = require('tape')

var Account = require('../../index')

test('new HoodieAdmin(options)', function (t) {
  store.clear()
  store.setObject('account_admin', {username: 'admin', session: {id: 'session123'}})
  simple.mock(global, 'location', {origin: 'http://example.com'})
  var account = new Account()

  account.ready.then(function () {
    simple.restore()
    t.is(account.username, 'admin', 'sets username from localStorage')
    t.end()
  })
})
