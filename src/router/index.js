import { createRouter, createWebHashHistory } from 'vue-router'

import Home from "@/pages/Home.vue";
import Delivery from "@/pages/Delivery.vue";
import Discounts from "@/pages/Discounts.vue";
import Feedback from "@/pages/Feedback.vue";
import About from "@/pages/About.vue";
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: Delivery
},
  {
    path: '/discounts',
    name: 'discounts',
    component: Discounts
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: Feedback
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy
},
]


const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router;
