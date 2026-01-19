// @ts-ignore
import MathJax from '@mathjax/src'
import { STATE } from '@mathjax/src/js/core/MathItem.js'
import { tex as mdTex } from '@mdit/plugin-tex'
import type MarkdownIt from 'markdown-it'

async function loadSVGDynamicFiles() {
  const fontData = MathJax.config.svg.fontData
  const dynamicFiles = fontData.dynamicFiles
  const dynamicFileNames = Object.keys(dynamicFiles)
  const dynamicPrefix: string = fontData.OPTIONS.dynamicPrefix

  await Promise.all(
    dynamicFileNames.map(async (name) => {
      try {
        await import(dynamicPrefix + '/' + name + '.js')
        fontData.dynamicFiles[name].setup(MathJax.startup.output.font)
      } catch {}
    })
  )
}

export async function mathjax(
  md: MarkdownIt,
  options: { svg: boolean } = { svg: false }
) {
  // const mjxBreakRegExp = /<mjx-break(.*?)>(.*?)<\/mjx-break>/g

  const { svg } = options

  await MathJax.init({
    loader: {
      load: [
        'input/tex',
        svg ? 'output/svg' : 'output/chtml',
        '[tex]/boldsymbol',
        '[tex]/braket',
        '[tex]/mathtools',
      ],
    },
    output: {
      font: 'mathjax-stix2',
      displayOverflow: 'scroll',
      mtextInheritFont: true,
    },
    tex: {
      packages: {
        '[+]': ['boldsymbol', 'braket', 'mathtools'],
      },
    },
    svg: {
      fontCache: 'none',
    },
    options: {
      renderActions: {
        removeLatex: [
          STATE.CONVERT + 1,
          () => {},
          (math: any, doc: any) => {
            math.root.walkTree((node: any) => {
              const attributes = node.attributes
              attributes.unset('data-latex')
              attributes.unset('data-latex-item')
            })
          },
        ],
      },
    },
  })

  const adaptor = MathJax.startup.adaptor

  adaptor.parser.protectHTML = (text: string): string => {
    return text
      .replace(/&(?!nbsp;)/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  }

  if (svg) {
    await loadSVGDynamicFiles()
  } else {
    await MathJax.startup.document.outputJax.font.loadDynamicFiles()
  }

  md.use(mdTex, {
    render(content: string, displayMode: boolean) {
      const node = (svg ? MathJax.tex2svg : MathJax.tex2chtml)(content, { display: displayMode })

      const inlineBreaks = adaptor.tags(node, 'mjx-break')
      for (const brk of inlineBreaks) {
        brk.children[0].value = '&nbsp;'
      }

      const html = adaptor.outerHTML(node)
      // .replace(
      //   mjxBreakRegExp,
      //   (_: string, attr: string, inner: string) =>
      //     `<mjx-break${attr}>${inner.replace(/ /g, '&nbsp;')}</mjx-break>`
      // )
      return html
    },
  })
}
