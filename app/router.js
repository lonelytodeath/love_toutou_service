'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { controller } = app;
  const router = app.router.namespace('/v1/news');
  router.get('/', controller.home.index);
};
