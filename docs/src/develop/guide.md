# 开发入门
:::tip 
为了提高整体素质，以及使更多人能够学会**开发自己想要的插件**，这个栏目将以**新手的标准**教会你自定义自己的插件！
:::
入门教程采取[案例+分析](#)的教学模式，**在实践中学习，快速成长。**

## 创建插件
接下来将带领你创建你的第一个插件，<br>
请**确保已经安装好**[Pupbot框架](#)。

## 插件模版
打开你部署框架的文件夹所在`终端`，输入:
``` shell
pup create
```
创建官方提供的(Js)插件模版，
会在 plugins > demo下生成**index.js文件**，<br>请先观看 [PupPlugin API](/api/plugin) 再继续以下内容：（附有注释)
``` js
const { PupPlugin, segment, http } = require('@pupbot/core')
//引入PupPlugin插件类，segment(构建多元素消息),http(模块)
const plugin = new PupPlugin('demo', '0.1.0')
//设置插件名称，版本号
plugin.onMounted(() => {//插件被启用调用函数
  plugin.onMessage(event => {
    const { raw_message } = event
//event为接收到的(消息/事件)对象
    if (raw_message === 'hello') {   //如果接受到的消息为hello，回复world
      const msgs = [segment.face(66), 'world']
      event.reply(msgs)
    }
  })
})

module.exports = { plugin }
//导出plugin对象，请一定要导出！
```
## event
event为接收到的(消息/事件)**对象**。
>如 Plugin.onMessage((event)=>{}) 传入了event参数<br>
>下面是一个群聊消息event，可通过'.'访问属性，方法。<br>
>可以在插件中console.log(event)来查看event对象
``` json
GroupMessage {
  post_type: 'message',
  message_id: 'PffsqGW0gvIAAASnc8WhW2OtV/wB',
  user_id: 1706328818,
  time: 1672304636,
  seq: 1191,
  rand: 1942331739,
  font: '宋体',
  message: [
    { type: 'text', text: '这是文字' },
    { type: 'at', qq: 1706328818, text: '@Dogxi' },
    { type: 'text', text: ' ' },
    {
      type: 'image',
      file: '21b6f8fbd84b4e085e872ac05430b1ea33406-750-750.jpg',
      url: 'https://gchat.qpic.cn/download?appid=1407&fileid=Chh1X24xdloxWlBEajY5b2pNbG5HbjIwdncSFHcmAvQ74x_pnNKuuvR8ZsCJ5z_LGP6EAiD_CiiKn9OdvJ78AjD-tegDOPCswf8OUIC9owFYwIQ9&rkey=CAESSGFewwjiPE6gvm0HDXdgw_WqgfON-BWEa7eeD7-N6I9U1-N0PojJkIsF-fam2fKZXdlbEnGRkV-OrjFoykYSkEd2i--0daKJDQ&spec=0',
      asface: false
    }
  ],
  raw_message: '这是文字@Dogxi [图片]',
  message_type: 'group',
  sender: {
    user_id: 1706328818,
    nickname: 'Dogxi',
    card: '',
    sex: 'unknown',
    age: 16,
    area: '',
    level: 1,
    role: 'member',
    title: '你好'
  },
  group_id: 114514,
  group_name: '狗崽子',
  block: false,
  sub_type: 'normal',
  anonymous: null,
  atme: false,
  atall: false,
  group: Group { sendMsg: [AsyncFunction (anonymous)] },
  member: Member {},
  reply: [Function (anonymous)],
  recall: [Function (anonymous)],
  self_id: 2021612943
}
```
