'use strict';

// had enabled by egg
// exports.static = true;

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.sessionRedis = {
  enable: false,
  package: 'egg-session-redis',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.routerPlus = {
  enable: true,
  package: 'egg-router-plus',
};

