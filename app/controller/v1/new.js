/**
 * Created by weichao on 2019/5/10.
 */
'use strict';

const Controller = require('egg').Controller;

class NewController extends Controller {
  async getList() {
    const ctx = this.ctx;
    const { query } = ctx.validatedValue;
    const result = await ctx.service.new.getList(query.tag, query.page, query.pageSize);
    ctx.body = ctx.service.common.getReturnObject(result);
  }
}

module.exports = NewController;