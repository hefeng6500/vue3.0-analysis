module.exports = {
  title: 'Vue3.0 源码揭秘',
  description: 'Just playing around',
  base: "/vue3.0-analysis/",
  themeConfig: {
    nav: [
      { text: '前言', link: '/preface/' },
      { text: 'reactivity', link: '/reactivity/' },
      { text: 'mini-vue3', link: '/mini-vue3/' },
    ],
    sidebar: {
      '/preface/': [
        '',
      ],
      '/mini-vue3/': [
        '',
        'base-env',
        'reactivity'
      ]
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/docs',
      }
    }
  }
}