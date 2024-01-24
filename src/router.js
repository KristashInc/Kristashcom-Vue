import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Contact from './views/contact'
import FAQ from './views/faq'
import Home from './views/home'
import Resources from './views/resources'
import PlansPricing from './views/plans-pricing'
import Portfolio from './views/portfolio'
import Page from './views/page'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Contact',
      path: '/contact',
      component: Contact,
    },
    {
      name: 'FAQ',
      path: '/faq',
      component: FAQ,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Resources',
      path: '/resources',
      component: Resources,
    },
    {
      name: 'Plans-Pricing',
      path: '/plans-pricing',
      component: PlansPricing,
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
      component: Portfolio,
    },
    {
      name: 'Page',
      path: '**',
      component: Page,
      fallback: true,
    },
  ],
})
