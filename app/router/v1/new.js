/**
 * Created by weichao on 2019/5/10.
 */
'use strict';
const newsVaildSchema = require('../../vaildSchema/v1/new');
module.exports = app => {
  const { controller, middleware } = app;
  const router = app.router.namespace('/v1/news');
  router.get('/', middleware.validate(newsVaildSchema), controller.v1.new.getList);
};