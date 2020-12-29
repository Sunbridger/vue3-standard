import { App } from 'vue'

export default {
  install: (app: App) => {
    app.config.globalProperties.$logger = (log: string) => {
      console.log(log)
    }
  }
}
