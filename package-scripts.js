'use strict';

function test(testName, mochaParams) {
  const mochaCommand = 'mocha'
  return `${mochaCommand} ${mochaParams}`.trim();
}

module.exports = {
  scripts: {
    test: {
      default: {
        script: 'nps test.node',
        description: 'Run all tests'
      },
      node: {
        default: {
          script: 'nps test.node.unit',
          description: 'Run Node.js tests'
        },
        unit: {
          script: test('unit', '"test/node-unit/**/*.spec.js"'),
          description: 'Run Node.js unit tests'
        }
      }
    }
  }
};
