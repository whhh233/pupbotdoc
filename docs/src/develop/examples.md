# 插件示例
文字转语音插件的代码：
``` js
const { PupPlugin } = require('@pupbot/core');//引入pupot插件类(must)
const { segment } = require("oicq");
const { version } = require('./package.json')//(云端插件推荐)获取npmjs包版本，使之与插件版本统一(本地插件可不用使用)
const https = require('https');

const plugin = new PupPlugin('say',version); //pupbot插件类 新建实例
const config = {cmd:'跟我说'}
plugin.onMounted(() => {//插件被启用后调用函数,可带参数(详情见文档plugin API)

  plugin.saveConfig(Object.assign(config, plugin.loadConfig()))
//合并配置文件,参数相同、值不同 读取配置(data) 替代 默认配置(第7行)
  plugin.onMessage(event => {
    if (event.raw_message.startsWith(config.cmd)) {
      var word =event.raw_message.slice(config.cmd.length);
      https.get('https://ovooa.com/API/yuyin/api.php?msg='+encodeURI(word)+'&type=text',(res)=>{
        var url ='';
        res.on('data',(d)=>{
          url+=d
        });
        res.on('end',()=>{
          event.reply(segment.record(url))
        });
      })//https get 请求API | 也可用axios(内置模块)
    }
  })
})

module.exports = { plugin }
//导出插件对象(must)
```