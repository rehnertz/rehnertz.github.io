import { normalize } from 'node:path/posix'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from './theme'
import { mathEnv } from './math-env'
import { mathjax } from './mathjax'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'Rehnertz',
  description: 'Ray 的个人博客，记录学习笔记．',
  plugins: [mathjax()],
  bundler: viteBundler({
    viteOptions: {
      css: {
        preprocessorOptions: {
          scss: {
            silenceDeprecations: ['if-function'],
          },
        },
      },
    },
  }),
  theme,
  extendsPage(page) {
    if (page.filePathRelative) {
      const path = normalize(page.filePathRelative)
      if (
        !path.startsWith('posts/') &&
        (!path.endsWith('README.md') || path.slice(0, -10).indexOf('/') >= 0)
      ) {
        page.frontmatter.article ??= false
      }
    }
  },
  async extendsMarkdown(md) {
    mathEnv(md, { name: 'definition', displayName: '定义' })
    mathEnv(md, { name: 'theorem', displayName: '定理' })
    mathEnv(md, { name: 'claim', displayName: '断言' })
    mathEnv(md, {
      name: 'lemma',
      displayName: '引理',
      counterWith: 'theorem',
    })
    mathEnv(md, {
      name: 'proposition',
      displayName: '命题',
      counterWith: 'theorem',
    })
    mathEnv(md, {
      name: 'corollary',
      displayName: '推论',
      counterWith: 'theorem',
    })
    mathEnv(md, { name: 'example', displayName: '例' })
    mathEnv(md, { name: 'examples', displayName: '例', marker: ';' })
    mathEnv(md, { name: 'remark', displayName: '注解', useCounter: false })
    mathEnv(md, {
      name: 'remarks',
      displayName: '注解',
      useCounter: false,
      marker: ';',
    })
    mathEnv(md, { name: 'proof', displayName: '证明', useCounter: false })
    mathEnv(md, { name: 'solution', displayName: '解', useCounter: false })
  },
})
