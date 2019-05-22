/**
 * Created by weichao on 2019/5/10.
 */
const joi = require('joi');

module.exports = {
  query: {
    tag: joi.number().default(0),
    page: joi.number().default(1),
    pageSize: joi.number().default(10),
    keyword: joi.string().allow('').default(''),
  },
};