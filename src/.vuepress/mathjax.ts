import { tex as mdTeX } from '@mdit/plugin-tex'
import type { Plugin } from 'vuepress'
import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import type MarkdownIt from 'markdown-it'

import { mathjax as mjx } from '@mathjax/src/js/mathjax.js'
import { TeX } from '@mathjax/src/js/input/tex.js'
import { CHTML } from '@mathjax/src/js/output/chtml.js'
import { liteAdaptor } from '@mathjax/src/js/adaptors/liteAdaptor.js'
import { RegisterHTMLHandler } from '@mathjax/src/js/handlers/html.js'
import { MathJaxStix2Font } from '@mathjax/mathjax-stix2-font/js/chtml.js'
import '@mathjax/src/js/util/asyncLoad/esm.js'
import type { LiteDocument } from '@mathjax/src/js/adaptors/lite/Document.js'
import type { LiteText } from '@mathjax/src/js/adaptors/lite/Text.js'
import type { LiteElement } from '@mathjax/src/js/adaptors/lite/Element.js'
import type { MathDocument } from '@mathjax/src/js/core/MathDocument.js'

import '@mathjax/src/js/input/tex/base/BaseConfiguration.js'
import '@mathjax/src/js/input/tex/ams/AmsConfiguration.js'
import '@mathjax/src/js/input/tex/noundefined/NoUndefinedConfiguration.js'
import '@mathjax/src/js/input/tex/boldsymbol/BoldsymbolConfiguration.js'
import '@mathjax/src/js/input/tex/mathtools/MathtoolsConfiguration.js'
import '@mathjax/src/js/input/tex/braket/BraketConfiguration.js'

type VitePlugin = NonNullable<
  NonNullable<ViteBundlerOptions['viteOptions']>['plugins']
>[number]

const mathjaxStyleModuleID = 'virtual:mathjax-style.css'

const adaptor = liteAdaptor()
RegisterHTMLHandler(adaptor)

const tex = new TeX<LiteElement, LiteText, LiteDocument>({
  packages: ['base', 'ams', 'noundefined', 'boldsymbol', 'mathtools', 'braket'],
})
const chtml = new CHTML<LiteElement, LiteText, LiteDocument>({
  displayOverflow: 'scroll',
  fontData: MathJaxStix2Font,
  // The default fontURL in fontData is wrong.
  fontURL: '@mathjax/mathjax-stix2-font/chtml/woff2',
  adaptiveCSS: false,
})
const html: MathDocument<LiteElement, LiteText, LiteDocument> = mjx.document(
  '',
  {
    InputJax: tex,
    OutputJax: chtml,
  }
)

await chtml.font.loadDynamicFiles()

function viteMathJax(): VitePlugin {
  const virtualModuleID = `'\0${mathjaxStyleModuleID}`
  return {
    name: 'mathjax-styles',
    resolveId(id) {
      if (id === mathjaxStyleModuleID) {
        return virtualModuleID
      }
    },
    load(id) {
      if (id === virtualModuleID) {
        let style = adaptor.cssText(chtml.styleSheet(html))
        // Fix sqrt top border for STIX2.
        style += `
mjx-sqrt > mjx-box {
  border-top-style: solid !important;
}
`
        return style
      }
    },
  }
}

function mdMathJax(md: MarkdownIt): void {
  mdTeX(md, {
    render(content, displayMode) {
      const node = html.convert(content, {
        display: displayMode,
      }) as LiteElement
      return adaptor.outerHTML(node)
    },
  })
}

function copyMathJax() {
  // Modified from https://github.com/KaTeX/KaTeX/blob/main/contrib/copy-tex/copy-tex.js
  function closestMathJax(node: Node): Element | null {
    const element = node instanceof Element ? node : node.parentElement
    return element && element.closest('mjx-container')
  }

  document.addEventListener('copy', (ev: ClipboardEvent) => {
    const selection = window.getSelection()
    if (!selection || selection.isCollapsed || !ev.clipboardData) {
      // default action OK if selection is empty or unchangeable
      return
    }

    const clipboardData = ev.clipboardData
    const range = selection.getRangeAt(0)
    // When start point is within a formula, expand to entire formula.
    const startMathJax = closestMathJax(range.startContainer)
    if (startMathJax) {
      range.setStartBefore(startMathJax)
    }

    // Similarly, when end point is within a formula, expand to entire formula.
    const endMathJax = closestMathJax(range.endContainer)
    if (endMathJax) {
      range.setEndAfter(endMathJax)
    }

    const fragment = range.cloneContents()
    const latexElement = fragment.querySelector('[data-latex]')
    if (!latexElement) {
      // default action OK if no [data-latex] elements
      return
    }

    const htmlContents = Array.prototype.map
      .call(fragment.childNodes, (el) =>
        el instanceof Text ? el.textContent : el.outerHTML
      )
      .join('')

    // Preserve usual HTML copy/paste behavior.
    clipboardData.setData('text/html', htmlContents)
    // Rewrite plain-text version.
    clipboardData.setData(
      'text/plain',
      latexElement.getAttribute('data-latex')!.trim()
    )
    // Prevent normal copy handling.
    ev.preventDefault()
  })
}

export function mathjax(): Plugin {
  return {
    name: 'mathjax',

    async clientConfigFile(app) {
      return app.writeTemp(
        'mathjax-config.js',
        `
import { onMounted } from 'vue'
import '${mathjaxStyleModuleID}'

${copyMathJax.toString()}

export default {
  setup() {
    onMounted(() => {
      if (!__VUEPRESS_SSR__) {
        copyMathJax()
      }
    })
  }
}`
      )
    },

    extendsMarkdown(md) {
      mdMathJax(md)
    },

    extendsBundlerOptions(options: ViteBundlerOptions) {
      options.viteOptions ??= {}
      options.viteOptions.plugins ??= []
      options.viteOptions.plugins.push(viteMathJax())

      options.vuePluginOptions ??= {}
      options.vuePluginOptions.template ??= {}
      options.vuePluginOptions.template.compilerOptions ??= {}

      const _isCustomElement =
        options.vuePluginOptions.template.compilerOptions.isCustomElement
      options.vuePluginOptions.template.compilerOptions.isCustomElement = (
        tag
      ) => _isCustomElement?.(tag) || tag.startsWith('mjx-')

      const _isPreTag =
        options.vuePluginOptions.template.compilerOptions.isPreTag
      options.vuePluginOptions.template.compilerOptions.isPreTag = (tag) =>
        _isPreTag?.(tag) || tag === 'pre' || tag.startsWith('mjx-')
    },
  }
}
