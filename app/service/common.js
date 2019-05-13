/**
 * Created by weichao on 2019/5/10.
 */
'use strict';
const Service = require('egg').Service;

class CommonService extends Service {
  getReturnObject(data, isSuccess = true) {
    return {
      success: Boolean(isSuccess),
      data,
    };
  }
}

module.exports = CommonService;