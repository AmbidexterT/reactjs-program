module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleDirectories: ['node_modules', 'src'],
    transform: {
      '\\.tsx?$': 'ts-jest',
      '\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '.+\\.(css|less|sass|scss)$': 'identity-obj-proxy',
      '.+\\.(jpg|jpeg|png|gif|eot|otf|svg|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
    },
    testPathIgnorePatterns: ['node_modules', '\\.cache'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.tsx'],
    coverageDirectory: 'coverage',
    setupFiles: ['./jest.setup.js'],
    globals: {
      NODE_ENV: 'test',
    },
  };
