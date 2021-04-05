'use strict';

const TYPES = (exports.types = {
  array: [
    'extension',
    'file',
    'global',
    'ignore',
    'reporter-option',
    'require',
    'spec',
    'watch-files',
    'watch-ignore',
  ],
  boolean: [
    'allow-uncaught',
    'async-only',
    'bail',
    'check-leaks',
    'color',
    'delay',
    'diff',
    'exit',
    'forbid-only',
    'forbid-pending',
    'full-trace',
    'growl',
    'inline-diffs',
    'invert',
    'list-interfaces',
    'list-reporters',
    'no-colors',
    'parallel',
    'recursive',
    'sort',
    'watch',
  ],
  number: ['retries', 'jobs'],
  string: [
    'config',
    'fgrep',
    'grep',
    'package',
    'reporter',
    'ui',
    'slow',
    'timeout',
  ],
});

exports.aliases = {
  'async-only': ['A'],
  bail: ['b'],
  color: ['c', 'colors'],
  fgrep: ['f'],
  global: ['globals'],
  grep: ['g'],
  growl: ['G'],
  ignore: ['exclude'],
  invert: ['i'],
  jobs: ['j'],
  'no-colors': ['C'],
  parallel: ['p'],
  reporter: ['R'],
  'reporter-option': ['reporter-options', 'O'],
  require: ['r'],
  slow: ['s'],
  sort: ['S'],
  timeout: ['t', 'timeouts'],
  ui: ['u'],
  watch: ['w'],
};

const ALL_MOCHA_FLAGS = Object.keys(TYPES).reduce((acc, key) => {
  TYPES[key].forEach((flag) => {
    acc.add(flag);
    const aliases = exports.aliases[flag] || [];
    aliases.forEach((alias) => {
      acc.add(alias);
    });
  });
  return acc;
}, new Set());

exports.isMochaFlag = (flag) => {
  return ALL_MOCHA_FLAGS.has(flag.replace(/^--?/, ''));
};
