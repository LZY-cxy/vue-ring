import vueRing from './vue-ring.vue'

vueRing.install = function(Vue) {
    Vue.component('v-circle-ring', vueRing)
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueRing)
}

export default vueRing