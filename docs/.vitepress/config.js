import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'PupBot',
  description: '轻量、跨平台的 QQ 机器人框架',
  head: [['link', { rel: 'icon', type: 'image/png', href: `/pup.png` }]],
  lastUpdated: true,
  srcDir: 'src',
  markdown: {
    theme: 'one-dark-pro'
    // lineNumbers: true
  },
  themeConfig: {
    logo: '/pup.png',
    nav: [
      { text: '文档', link: '/about' },
      { text: '插件', link: '/plugin/note' },
      {
        text: '开发',
        link: '/develop/before'
      },
      {
        text: '社区',
        items: [
          {
            items: [
              { text: 'QQ 交流群', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=HK_MJ6jPmNb--oFtqGbYLnrSrYORiayX&jump_from=webapi&authKey=v/GUqKlGOF/EUGF5irCqYRA/+JFJ7pIRtqXNGPsNCos159ati25QOlqVTmGF8bjO' }
            ]
          },
          {
            items: [
              { text: 'npm 插件列表', link: 'https://npm.im/search?q=pupbot-plugin' },
              { text: '支持本项目', link: '/support' }
            ]
          }
        ]
      }
    ],
    sidebar: [
      {
        text: '开始',
        collapsible: true,
        items: [
          { text: '简介', link: '/about' },
          {
            text: '快速上手',
            link: '/start/online'
          },
          {
            text: '部署',
            items: [
              { text: 'Linux', link: '/start/linux' },
              { text: 'Windows', link: '/start/win' },
              { text: 'Android (Termux)', link: '/start/android' },
            ]
          },
          {
            text: '命令',
            items: [
              { text: '消息指令', link: '/start/cmd/msg' },
              { text: 'CLI 命令', link: '/start/cmd/cli' }
            ]
          },
          {
            text: '配置文件',
            link: '/start/config'
          },
          {
            text: '常见问题',
            link: '/start/problem'
          }
        ]
      },
      {
        text: '插件',
        collapsible: true,
        items: [
          { text: '插件说明', link: '/plugin/note' },
          { text: '安装插件', link: '/plugin/install' },
          { text: '插件列表', link: '/plugin/list' },
        ]
      },
      {
        text: '开发',
        collapsible: true,
        items: [
          { text: '前置知识', link: '/develop/before' },
          { text: '开发入门', link: '/develop/guide' },
          { text: '插件生命周期', link: '/develop/lifecycle' },
          { text: '开发技巧', link: '/develop/tricks' },
          { text: '插件示例', link: '/develop/examples' },
          { text: '发布插件', link: '/develop/publish' },
        ]
      },
      {
        text: 'API 文档',
        collapsible: true,
        items: [
          { text: 'PupPlugin API', link: '/api/plugin' },
          { text: 'Bot API', link: '/api/bot' },
          { text: 'oicq v2 标准事件', link: '/api/oicq_events' }
        ]
      }
    ],
    outline: 2,
    outlineTitle: '大纲',
    socialLinks: [{ icon: 'github', link: 'https://www.npmjs.com/package/@pupbot/core' }],
    footer: {
      message:
        'PupBot 使用 MPL-2.0 协议开放源代码 | 感谢 <a href="https://github.com/KiviBotLab/docs">KiviBot框架</a>🔝 提供的技术支持',
      copyright: 'Copyright © 2022-PRESENT <a href="https://github.com/vikiboss">Dogxi</a>'
    },
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    editLink: {
      pattern: 'https://github.com/dog234/pupbotdoc/edit/main/docs/src/:path',
      text: '在 GitHub 上编辑'
    }
  }
})
