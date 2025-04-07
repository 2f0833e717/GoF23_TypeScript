/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  verbose: true,
  testTimeout: 30000,
  maxWorkers: '50%',
  bail: false,
  detectOpenHandles: true,
  forceExit: true,
  testSequencer: '@jest/test-sequencer',
  maxConcurrency: 5,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}; 