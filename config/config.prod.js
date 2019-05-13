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
  return config;
}
