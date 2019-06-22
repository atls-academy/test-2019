module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '/(__tests__|e2e)/.*\\.(test|spec)\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    'packages/dashboard/*/src/**/*.(js|ts|tsx)',
    'packages/ui/*/src/**/*.(js|ts|tsx)',
  ],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['json', 'lcov', 'html', 'text', 'text-summary'],
  roots: ['packages/dashboard/', 'packages/ui/'],
}
