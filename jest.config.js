module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],

  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
      },
    ],
  },

  transformIgnorePatterns: [
    'node_modules/(?!(@angular|@faker-js|@brejcha13320|rxjs|tslib)/)'
  ],

  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],

  coverageReporters: ['html', 'json', 'lcov', 'text', 'clover'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],

  verbose: true,
  testEnvironment: 'jsdom',
  collectCoverage: true,
  clearMocks: true,
  testMatch: ['**/*.spec.ts'],
  rootDir: './',
};