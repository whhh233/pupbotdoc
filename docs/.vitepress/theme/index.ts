import Theme from 'vitepress/theme'
import './var.css'
import list from './layouts/list/index.vue'

export default {
  ...Theme,
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx)
    ctx.app.component('List',list)
  }
}