module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/tests/unit/**/*.spec.[jt]s?(x)',
    '**/src/**/*.spec.[jt]s?(x)'
  ],
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcovonly', 'cobertura'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.vue',
    '<rootDir>/src/**/*.ts'
  ]
}
