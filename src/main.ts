import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import init from '/@/common/init'

const app = createApp(App)

init.load(app)

app
  .use(store)
  .use(router).mount('#app')

// souche-core

// 1. varibale;
// 2. fengzhuag
// suv souce0tiurl

// souchecore.init({
//     instance,
//     plugins: ['']
//     store,
//     router,
//     hooks
// })
// const {vm} from 'varilba'

// vm.use();
