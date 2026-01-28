import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
  hostname: 'https://rehnertz.github.io',
  author: {
    name: 'Rehnertz',
  },
  logo: '/avatar.jpg',
  pageInfo: ['Category', 'Date', 'Tag'],
  navbar,
  sidebar,
  blog: {
    description: '不学无术的码农',
    articleInfo: ['Category', 'Date', 'Tag'],
    medias: {
      Zhihu: 'https://www.zhihu.com/people/ray-87-74',
      BiliBili: 'https://space.bilibili.com/5678656',
    },
  },
  markdown: {
    attrs: true,
    figure: { focusable: false },
    imgLazyload: true,
    imgMark: true,
    imgSize: true,
    footnote: true,
    spoiler: true,
    sub: true,
    sup: true,
    math: {
      type: 'katex',
      output: 'htmlAndMathml',
      copy: true,
    },
  },
  plugins: {
    blog: {
      filter({ frontmatter, filePathRelative }) {
        if (
          frontmatter.home ||
          !filePathRelative ||
          frontmatter.article === false
        ) {
          return false
        }
        return true
      },
    },
  },
})
