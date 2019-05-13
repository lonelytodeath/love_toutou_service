/**
 * Created by weichao on 2019/5/10.
 */
'use strict';
const joi = require('joi');

module.exports = vaildSchema => {
  return async function vaildate(ctx, next) {
    ctx.validatedValue = {};
    const queryResult = joi.validate(
      ctx.request.query,
      joi.object().keys(vaildSchema.query)
    );
    if (queryResult.error) {
      ctx.throw(queryResult.error.message, 400);
    }
    ctx.validatedValue.query = queryResult.value;

    const bodyResult = joi.validate(
      ctx.request.body,
      joi.object().keys(vaildSchema.body)
    );
    if (bodyResult.error) {
      ctx.throw(bodyResult.error.message, 400);
    }
    ctx.validatedValue.body = bodyResult.value;

    const paramsResult = joi.validate(
      ctx.params,
      joi.object().keys(vaildSchema.params)
    );
    if (paramsResult.error) {
      ctx.throw(paramsResult.error.message, 400);
    }
    ctx.validatedValue.params = paramsResult.value;
    await next();
  };
};
