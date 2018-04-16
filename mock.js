require('dotenv').config()

let bugfixes = require('bugfixes')

let mockServerClient = require('mockserver-client').mockServerClient
let mockClient = mockServerClient('docker.devel', 9000)

bugfixes.log('Mock', 1)
mockClient.mockSimpleResponse(
  '/protected/json/users/new',
  {
    message: 'User Created',
    user: {
      id: process.env.TEST_ACCOUNT_ID_VALID
    },
    success: true
  },
  200
)

/*
bugfixes.log('Mock', 2)
mockClient.mockSimpleResponse(
  '/protected/json/users/' + process.env.TEST_ACCOUNT_ID_VALID + '/remove',
  {
    message: 'User Deleted',
    success: true
  },
  200
)

bugfixes.log('Mock', 3)
mockClient.mockSimpleResponse(
  '/protected/json/verify/' + process.env.TEST_ACCOUNT_VERIFY_VALID + '/' + process.env.TEST_ACCOUNT_ID_VALID,
  {
    message: 'Token Valid',
    token: 'is valid',
    success: true
  },
  200
)

bugfixes.log('Mock', 4)
mockClient.mockSimpleResponse(
  '/protected/json/verify/' + process.env.TEST_ACCOUNT_VERIFY_INVALID + '/' + process.env.TEST_ACCOUNT_ID_VALID,
  {
    message: 'Token is invalid',
    token: 'is invalid',
    success: false
  },
  401
)

bugfixes.log('Mock', 5)
mockClient.mockSimpleResponse(
  '/protected/json/users/' + process.env.TEST_ACCOUNT_ID_VALID + '/status',
  {
    message: 'User status.',
    success: true
  },
  200
)

bugfixes.log('Mock', 6)
mockClient.mockSimpleResponse(
  '/protected/json/sms/' + process.env.TEST_ACCOUNT_ID_VALID,
  {
    success: true
  },
  200
)

bugfixes.log('Mock', 7)
mockClient.mockSimpleResponse(
  '/protected/json/sms/' + process.env.TEST_ACCOUNT_ID_INVALID,
  {
    success: false
  },
  404
)

bugfixes.log('Mock', 8)
*/
