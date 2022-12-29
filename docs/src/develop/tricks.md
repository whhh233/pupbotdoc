# 插件开发技巧
- [插件开发技巧](#插件开发技巧)
  - [*判断首字符*](#判断首字符)
  - [*发送图文*](#发送图文)
## *判断首字符*
```js
if(raw_message.startsWith('点歌')){
    //执行代码
}
```
## *发送图文*
```js
const{segment}= require('oicq')
var img =segment.image(https://)
var msg ='xxx'
event.reply([img,msg])
```