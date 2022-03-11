module.exports = {
  base: "/vue3.0-analysis/",
  lang: "zh-CN",
  title: "Vue.js 3 设计和实现",
  description: "hefeng6500 的前端学习笔记，记录学习历程，分享学习总结！",
  lastUpdated: true,

  themeConfig: {
    repo: 'hefeng6500/vue3.0-analysis',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页面',
    lastUpdated: '上次更新',


    nav: [
      { text: "首页", link: "/" },
      { text: "mini-vue", link: "/mini-vue/" },
      { text: "Vue3源码分析", link: "/analysis/" },
    ],
    sidebar: {
      "mini-vue": [
        {
          text: "环境搭建篇",
          children: [
            {
              text: "Rollup基础环境搭建",
              link: "/mini-vue/env/base-env",
            }
          ],
        },
        {
          text: "响应式原理篇",
          children: [
            {
              text: "reactivity",
              link: "/mini-vue/react/reactivity",
            }
          ]
        }
      ],
      "analysis": [
        {
          text: "导读",
          link: "/vue3-analysis/guide"
        }
      ]
    },
  },
};
