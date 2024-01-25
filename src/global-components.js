// import * as bootstrapVue from 'bootstrap-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import FeatherIcon from '@/components/ui/FeatherIcon.vue'

// Bootstrap component
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Feather icon component
Vue.component(FeatherIcon.name, FeatherIcon)
