module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [
    '<rootDir>/__test__/setup/setup-react-testing-library.js'
  ],
  setupFiles: ['<rootDir>/__test__/setup/setup-env.js'],
  testPathIgnorePatterns: ['<rootDir>/__test__/setup/']
};
