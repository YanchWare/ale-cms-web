import App from './App'
import Article from './views/article'
import Contacts from './views/contacts'
import Frontpage from './views/frontpage'
import Portfolio from './views/portfolio'
import User from './views/user'
import Filters from './utilities/filters'
import Vue from 'vue'
import VueHead from 'vue-head'
import VueRouter from 'vue-router'

Vue.use(VueHead)
Vue.use(VueRouter)
Filters.initializeFilters()

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'frontpage', component: Frontpage },
    { path: '/about', name: 'about', component: Article },
    { path: '/locations/:locationId', name: 'locations', component: Article },
    { path: '/portfolio', name: 'portfolio', component: Portfolio },
    { path: '/team/:userId', name: 'user', component: User },
    { path: '/contacts', name: 'contacts', component: Contacts },
    { path: '*', name: 'notFound', component: Article }
  ]
})

new Vue({
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
