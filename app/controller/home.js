'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = '头头和皱皱是天生一对，他们有一个狗达和一个丫鬟，狗达叫嗡嗡怪，丫鬟叫小毛';
  }
}

module.exports = HomeController;
