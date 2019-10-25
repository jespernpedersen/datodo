import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faHeartbeat)
library.add(faBars)
library.add(faListUl)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(firestorePlugin);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')