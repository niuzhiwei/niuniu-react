const base = require('./jest.config')
module.exports = Object.assign({}, base, {
  reporters: ['jest-junit'],
  collectCoverage: true,
  collectCoverageFrom: ['{lib,include}/**/*.{ts,tsx}', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
})
