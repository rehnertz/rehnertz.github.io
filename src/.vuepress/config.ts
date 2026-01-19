import { normalize } from 'node:path/posix'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from './theme'
import mathEnv from './math-env'
import { mathjax } from './mathjax'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'Rehnertz',
  description: 'Ray 的个人博客，记录学习笔记．',
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
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('mjx-'),
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
    await mathjax(md)
    md.use(mathEnv, { name: 'definition', displayName: '定义' })
    md.use(mathEnv, { name: 'theorem', displayName: '定理' })
    md.use(mathEnv, { name: 'claim', displayName: '断言' })
    md.use(mathEnv, {
      name: 'lemma',
      displayName: '引理',
      counterWith: 'theorem',
    })
    md.use(mathEnv, {
      name: 'proposition',
      displayName: '命题',
      counterWith: 'theorem',
    })
    md.use(mathEnv, {
      name: 'corollary',
      displayName: '推论',
      counterWith: 'theorem',
    })
    md.use(mathEnv, { name: 'example', displayName: '例' })
    md.use(mathEnv, { name: 'examples', displayName: '例', marker: ';' })
    md.use(mathEnv, { name: 'remark', displayName: '注解', useCounter: false })
    md.use(mathEnv, {
      name: 'remarks',
      displayName: '注解',
      useCounter: false,
      marker: ';',
    })
    md.use(mathEnv, { name: 'proof', displayName: '证明', useCounter: false })
    md.use(mathEnv, { name: 'solution', displayName: '解', useCounter: false })
  },
})
