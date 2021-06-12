module.exports = {
  title: 'Vue3.0 源码揭秘',
  description: 'Just playing around',
  base: "/vue3.0-analysis/",
  themeConfig: {
    nav: [
      { text: '概况', link: '/overview/' },
      { text: 'reactivity', link: '/reactivity/' },
      { text: 'mini-vue3', link: '/mini-vue3/' },
    ],
    sidebar: {
      '/overview/': [
        '',
        'page-a',
        'page-b'
      ],
      '/mini-vue3/': [
        '',
        'base-env'
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