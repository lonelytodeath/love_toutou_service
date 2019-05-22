/**
 * Created by weichao on 2019/5/9.
 */
'use strict';

const Subscription = require('egg').Subscription;

class ImportNewsJob extends Subscription {
  static get schedule() {
    return {
      interval: '10m',
      type: 'worker',
      disable: false,
      cronOptions: {
        tz: 'Asia/Shanghai',
      },
    };
  }

  async subscribe() {
    const ctx = this.ctx;
    const channels = [ '__all__', 'news_hot', 'news_society', 'news_entertainment', 'news_tech', 'news_sports', 'news_finance', 'news_military', 'news_world', 'news_fashion' ];
    for (let i = 0; i < channels.length; i++) {
      const channel = channels[i];
      const url = `https://m.toutiao.com/list/?tag=${channel}&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1`;
      const result = await ctx.curl(url,
        {
          dataType: 'json',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
            'Cookie': 'UM_distinctid=1687e67f80915-024fea50f17123-10306653-1fa400-1687e67f80ceac; tt_webid=6649936366958937607; _ga=GA1.2.1825884701.1555997993; csrftoken=3a851774d066203c48b87c64396da525; _ba=BA0.2-20190429-51225-rIvyyXmVC96d7Zx5VXUu; s_v_web_id=fa37a1bc2d24e26aff68c9a85e9ac963',
          },
        });
      const response = result.data;
      const type = ctx._.indexOf(channels, channel);
      for (const article of response.data) {
        const imgs = [];
        for (const img of article.image_list) {
          imgs.push(img.url);
        }
        const data = {
          title: article.title,
          imgs,
          source: article.source,
          commentCount: article.comment_count,
          sourceUrl: article.share_url,
          type,
          sourceArticleId: article.item_id,
        };
        await ctx.model.New.findOneAndUpdate({ sourceArticleId: data.sourceArticleId }, data, { upsert: true });
      }
    }
    console.log('import completed');
  }
};

module.exports = ImportNewsJob;