import { defineClientConfig } from 'vuepress/client'
import HaruhikageSheet from './HaruhikageSheet.vue'
import 'vuepress-theme-hope/presets/round-blogger-avatar.scss'
import 'vuepress-theme-hope/presets/bounce-icon.scss'
import 'vuepress-theme-hope/presets/hr-driving-car.scss'

export default defineClientConfig({
  rootComponents: [HaruhikageSheet]
})
