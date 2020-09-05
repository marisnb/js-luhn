'use strict'

const test = require('tape')
const luhn = require('../lib/index')

test(function (t) {
  t.ok(luhn('4242424242424242'), 'passing')
  t.ok(luhn('4242 4242 4242 4242'), 'passing')
  t.ok(luhn('378282246310005'), 'passing')
  t.ok(luhn(378282246310005), 'passing')
  t.ok(luhn('3530111333300000'), 'passing')
  t.ok(luhn('0000000000000000'), 'passing')
  t.notOk(luhn('4242424242424241'), 'failing')
  t.notOk(luhn(' '), 'failing')
  t.notOk(luhn(undefined), 'failing')
  t.notOk(luhn(null), 'failing')
  t.end()
})
