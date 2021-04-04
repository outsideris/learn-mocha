'use strict';

const unexpected = require('unexpected');

global.expect = unexpected
  .clone();
