import { nextTick } from 'vue'
import { defineClientConfig } from 'vuepress/client'
import 'vuepress-theme-hope/presets/round-blogger-avatar.scss'
import 'vuepress-theme-hope/presets/bounce-icon.scss'
import 'vuepress-theme-hope/presets/hr-driving-car.scss'

function adjustMathJaxContainerWidth() {
  const mjxContainers: NodeListOf<HTMLElement> = document.querySelectorAll(
    'mjx-container[display]'
  )

  for (const mjxContainer of mjxContainers) {
    const mjxMath: HTMLElement | null = mjxContainer.querySelector('mjx-math')
    if (!mjxMath) {
      continue
    }
    const ratio = Math.min(
      mjxContainer.offsetWidth / (mjxMath.offsetWidth + 16),
      1
    )
    console.log(mjxContainer.offsetWidth, mjxMath.offsetWidth)
    mjxContainer.style.fontSize = `${ratio * 100}%`
  }
}

export default defineClientConfig({
  enhance({ router }) {
    router.afterEach(() => {
      nextTick(adjustMathJaxContainerWidth)
    })
  },
  setup() {
    window.addEventListener('resize', adjustMathJaxContainerWidth)
  },
})
