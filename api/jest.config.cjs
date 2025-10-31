// configure Jest for a Node.js environment that uses Babel to compile JavaScript files
module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    testEnvironment: 'node',
    transformIgnorePatterns: ['/node_modules/'],
};

