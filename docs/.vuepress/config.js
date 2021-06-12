module.exports = {
  title: 'Vue3.0 源码揭秘',
  description: 'Just playing around',
  base: "/vue3.0-analysis",
  themeConfig: {
    nav: [
      { text: '概况', link: '/overview/' },
      { text: 'reactivity', link: '/reactivity/' },
    ],
    sidebar: {
      '/overview/': [
        '',
        'page-a',
        'page-b'
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