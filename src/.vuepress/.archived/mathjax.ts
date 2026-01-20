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
      font: 'mathjax-newcm',
      displayOverflow: 'scroll',
      mtextInheritFont: true,
    },
    tex: {
      packages: {
        '[+]': ['boldsymbol', 'braket', 'mathtools'],
      },
    },
    chtml: {
      adaptiveCSS: false,
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

  if (svg) {
    await loadSVGDynamicFiles()
  } else {
    await MathJax.startup.document.outputJax.font.loadDynamicFiles()
  }

  adaptor.parser.protectHTML = (text: string): string => {
    return text
      .replace(/&(?!nbsp;)(?!#)/g, '&amp;')
      .replace(/<(?!br \/>)/g, '&lt;')
      .replace(/(?<!<br \/)>/g, '&gt;')
  }

  function normalizeTexts(node: any) {
    if (node.kind === '#text') {
      node.value = node.value
        .replaceAll(' ', '&nbsp;')
        .replaceAll('\n', '<br />')
    }
    if (node.children) {
      for (const child of node.children) {
        normalizeTexts(child)
      }
    }
  }

  md.use(mdTex, {
    render(content: string, displayMode: boolean) {
      const node = (svg ? MathJax.tex2svg : MathJax.tex2chtml)(content, {
        display: displayMode,
      })
      normalizeTexts(node)
      const html = adaptor.outerHTML(node)
      return html
    },
  })
}
