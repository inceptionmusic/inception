module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  testMatch: ['**/tests/**/*.test.tsx'],
  collectCoverageFrom: ['<rootDir>/src/components/**/*.{js,jsx,ts,tsx}'],
}
