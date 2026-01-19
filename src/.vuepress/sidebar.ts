/*
 * Automatically generate the sidebar.
 */

import { globSync } from 'node:fs'
import { sidebar } from 'vuepress-theme-hope'

const paths = globSync('src/*', {
  withFileTypes: true,
  exclude: ['src/posts', 'src/figures'],
})
const collections = paths.filter((p) => p.isDirectory())

export default sidebar(
  collections.reduce((o, p) => ((o['/' + p.name] = 'structure'), o), {
    '/posts': false,
    '/category': false,
    '/tag': false,
    '/article': false,
    '/star': false,
    '/timeline': false,
  } as any)
)
