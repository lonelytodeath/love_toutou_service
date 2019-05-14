'use strict';
module.exports = appInfo => {
  const config = {};
  config.keys = appInfo.name + '_1532962019674_2847';
  config.cluster = {
    listen: {
      port: 10000,
      hostname: '0.0.0.0',
    }
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    // credentials: 'true',
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
  };

  config.session = {
    key: 'c4275bcd9a7124ae5e16808a426c1601',
    maxAge: 30 * 24 * 3600 * 1000, // 30 天
    httpOnly: true,
    encrypt: true,
    // domain: '.ailingual.cn',
  };

  config.mongoose = {
    client: {
      url: 'mongodb://localhost/toutiao',
      options: {},
    },
  };

  config.redis = {
    client: {
      port: 6379,
      host: 'localhost',
      db: 0,
      password: '',
    },
    agent: true,
  };
  return config;
}
