import { createRouter, createWebHashHistory } from 'vue-router'

import Home from "@/pages/Home.vue"
import Delivery from "@/pages/Delivery.vue"
import Discounts from "@/pages/Discounts.vue"
import Feedback from "@/pages/Feedback.vue"
import About from "@/pages/About.vue"
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue"
import Requisites from "@/pages/Requisites.vue"
import ExchangeReturn from "@/pages/ExchangeReturn.vue"
import Agreement from "@/pages/Agreement.vue"
import Partners from "@/pages/Partners.vue"
import DryFood from "@/pages/ForCats/DryFood.vue"


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
    {
        path: '/requisites',
        name: 'requisites',
        component: Requisites
    },
    {
        path: '/exchange-return',
        name: 'exchange-return',
        component: ExchangeReturn
    },
    {
        path: '/agreement',
        name: 'agreement',
        component: Agreement
    },
    {
        path: '/partners',
        name: 'partners',
        component: Partners
    },
    {
        path: '/for-cats/dry-food',
        name: 'dry-food',
        component: DryFood
    },
]


const router = createRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
    history: createWebHashHistory()
})

export default router;
