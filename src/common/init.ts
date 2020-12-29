import Antd from 'ant-design-vue'
import { App } from 'vue'
import 'ant-design-vue/dist/antd.css'
import Statistics from '@souche-f2e/statistics-next'
import Plugins from './plugins'
import router from '/router/'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: any;
    $logger: any;
  }
}

// antd design 组件初始化
const InitAntdesignComponent = (vue: App) => {
  vue.use(Antd)
}

//  自定义plugins初始化
const InitPlugins = (vue: App) => {
  vue.use(Plugins)
}

const InitStatistics = () => {
  Statistics.init({
    load: function () {
      return true
    },
    router,
    piwik: {
      userPhone: '187****6575',
      userId: 'abcde',
      siteId: 'tangeche-market'
    },
    env: 'development'
  })
}

export default {
  load: (vue: App) => {
    InitAntdesignComponent(vue)
    InitPlugins(vue)
    InitStatistics()
  }
}
