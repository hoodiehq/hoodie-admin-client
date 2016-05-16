# hoodie-admin-client

> Client Admin API for the Hoodie server

[![Build Status](https://travis-ci.org/hoodiehq/hoodie-admin-client.svg?branch=master)](https://travis-ci.org/hoodiehq/hoodie-admin-client)
[![Coverage Status](https://coveralls.io/repos/hoodiehq/hoodie-admin-client/badge.svg?branch=master)](https://coveralls.io/r/hoodiehq/hoodie-admin-client?branch=master)
[![Dependency Status](https://david-dm.org/hoodiehq/hoodie-admin-client.svg)](https://david-dm.org/hoodiehq/hoodie-admin-client)
[![devDependency Status](https://david-dm.org/hoodiehq/hoodie-admin-client/dev-status.svg)](https://david-dm.org/hoodiehq/hoodie-admin-client#info=devDependencies)

`hoodie-admin-client` is currently a simple wrapper around the [Hoodie Account’s
admin client](https://github.com/hoodiehq/hoodie-account-client/tree/master/admin).

We plan to add APIs to access users’ data and make the Hoodie Admin Client
extendable as the Hoodie Client, but there was no need for yet.

## Example

```js
var HoodieAdmin = require('@hoodie/admin-client')
var admin = new HoodieAdmin()

if (!admin.isSignedIn()) {
  renderLogin()
} else {
  admin.accounts.findAll().then(renderAccounts)
}

admin.accounts.on('change', renderAccounts)
```

## API

Same as [AccountAdmin API](https://github.com/hoodiehq/hoodie-account-client/tree/master/admin).
Only difference is that `options.url` defaults to `location.origin` and `AccountAdmin`
gets initialised with `options.url + '/hoodie/account/api'`.

## Testing

Local setup

```
git clone https://github.com/hoodiehq/hoodie-admin-client.git
cd hoodie-admin-client
npm install
```

Run all tests

```
npm test
```

## Contributing

Have a look at the Hoodie project's [contribution guidelines](https://github.com/hoodiehq/hoodie/blob/master/CONTRIBUTING.md).
If you want to hang out you can join our [Hoodie Community Chat](http://hood.ie/chat/).

## License

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0)
