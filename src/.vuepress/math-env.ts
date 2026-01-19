import {
  container,
  type MarkdownItContainerOptions,
} from '@mdit/plugin-container'
import type MarkdownIt from 'markdown-it'

type Token = Parameters<MarkdownIt['renderer']['render']>[0][0]

export interface MathEnvOptions {
  name: string
  displayName: string
  /**
   * @default true
   */
  useCounter?: boolean
  /**
   * @default undefined
   */
  counterWith?: string
  /**
   * @default ':'
   */
  marker?: string
}

export default function mathEnv(md: MarkdownIt, options: MathEnvOptions) {
  const { name, displayName, useCounter, counterWith, marker } = options
  // `theorem*#ref-id[style] description`
  const envPattern = new RegExp(
    `^${name}(\\*)?(?:#(.*?))?(?:\\[(.+?)\\])?\\s*(?:\\s(.+?)\\s*)?\$`
  )

  md.use(container, {
    name,
    marker,

    validate: (params, markup) => envPattern.test(params.trim()),

    closeRender: (tokens, idx, options, env, self) => '</div>',

    openRender: (tokens, idx, options, env, self) => {
      const token = tokens[idx]
      const info = token.info.trim()
      const infoMatched = info.match(envPattern)
      if (!infoMatched) {
        throw `Math environment info ${info} does not match the pattern ${envPattern}`
      }
      const [_, star, label, style, desc]: (string | undefined)[] = infoMatched

      let caption = displayName
      if ((useCounter ?? true) && star !== '*') {
        const counter = getMathEnvCounter(counterWith ?? name, token, env)
        caption += ' ' + counter
      }
      if (desc) {
        caption += '（' + desc + '）'
      }
      caption += '&emsp;'

      const styleAttr = style ? `data-math-env-style="${style}"` : ''
      let openning = `<div ${styleAttr} class="${name}"`
      if (label) {
        openning += `id="${label}"`
      }
      openning += '>'

      // If the content after the caption is a normal paragraph, insert the caption in terms of a `span`
      // and remove the `p` tag. Otherwise insert a new paragraph.
      if (
        tokens[idx + 1]?.type === 'paragraph_open' &&
        tokens[idx + 2]?.type === 'inline'
      ) {
        const captionToken = md.parse(
          `<span class="math-env-caption">${caption}</span>`,
          env
        )
        tokens[idx + 2].children!.unshift(...captionToken[1].children!)
      } else {
        openning += `<p class="math-env-caption">${caption}</p>`
      }

      return openning
    },
  } satisfies MarkdownItContainerOptions)
}

function getMathEnvCounter(name: string, token: Token, env: any) {
  const mathEnvId = token.map!.toString()
  env.mathEnv ??= {}
  const mathEnv = env.mathEnv
  mathEnv[name] ??= { __counter__: 0 }
  if (mathEnvId in mathEnv) {
    return mathEnv[name].__counter__
  }

  mathEnv[name][mathEnvId] = true
  return ++mathEnv[name].__counter__
}
