/**
 * Created by weichao on 2019/5/9.
 */
'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const NewSchema = new Schema(
    {
      title: {
        type: String,
      },
      imgs: {
        type: [ String ],
        default: [],
      },
      sourceArticleId: {
        type: String,
        index: true,
      },
      source: {
        type: String,
      },
      commentCount: {
        type: Number,
        default: 0,
        index: true,
      },
      content: {
        type: String,
      },
      // 采集源地址
      sourceUrl: {
        type: String,
      },
      type: { // 0 推荐 1 热点 2 社会 3 娱乐 4 科技 5 汽车 6 体育 7 财经 8 军事 9 国际 10 时尚
        type: Number,
        default: 0,
        index: true,
      },
    },
    {
      timestamps: true,
    }
  );
  return mongoose.model('New', NewSchema);
};