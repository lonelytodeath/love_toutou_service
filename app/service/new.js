/**
 * Created by weichao on 2019/5/10.
 */
'use strict';
const Service = require('egg').Service;

class NewService extends Service {

  async getList(tag, page, pageSize) {
    const ctx = this.ctx;
    return ctx.model.New.find({
      type: tag,
    }).skip((page - 1) * pageSize).limit(pageSize).sort({ createdAt: -1 }).lean();
  }
}

module.exports = NewService;
