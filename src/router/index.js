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
import CatsDryFood from "@/pages/ForCats/CatsDryFood.vue"
import CatsWetFood from "@/pages/ForCats/CatsWetFood.vue"
import CatsBowlsDrinkers from "@/pages/ForCats/CatsBowlsDrinkers.vue"
import CatsTraysToilets from "@/pages/ForCats/CatsTraysToilets.vue"
import CatsFillers from "@/pages/ForCats/CatsFillers.vue"
import CatsScratchingPosts from "@/pages/ForCats/CatsScratchingPosts.vue"
import CatsCarrying from "@/pages/ForCats/CatsCarrying.vue"
import CatsBeds from "@/pages/ForCats/CatsBeds.vue"
import CatsToys from "@/pages/ForCats/CatsToys.vue"
import DogsDryFood from "@/pages/ForDogs/DogsDryFood.vue"
import DogsWetFood from "@/pages/ForDogs/DogsWetFood.vue"
import DogsBowlsDrinkers from "@/pages/ForDogs/DogsBowlsDrinkers.vue"
import DogsTraysToilets from "@/pages/ForDogs/DogsTraysToilets.vue"







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
        component: CatsDryFood
    },
    {
        path: '/for-cats/wet-food',
        name: 'wet-food',
        component: CatsWetFood
    },
    {
        path: '/for-cats/bowls-drinkers',
        name: 'bowls-drinkers',
        component: CatsBowlsDrinkers
    },
    {
        path: '/for-cats/trays-toilets',
        name: 'trays-toilets',
        component: CatsTraysToilets
    },
    {
        path: '/for-cats/fillers',
        name: 'fillers',
        component: CatsFillers
    },
    {
        path: '/for-cats/scratching-posts',
        name: 'scratching-posts',
        component: CatsScratchingPosts
    },
    {
        path: '/for-cats/carrying',
        name: 'carrying',
        component: CatsCarrying
    },
    {
        path: '/for-cats/beds',
        name: 'beds',
        component: CatsBeds
    },
    {
        path: '/for-cats/toys',
        name: 'toys',
        component: CatsToys
    },
    {
        path: '/for-dogs/dry-food',
        name: 'dry-food',
        component: DogsDryFood
    },
    {
        path: '/for-dogs/wet-food',
        name: 'wet-food',
        component: DogsWetFood
    },
    {
        path: '/for-dogs/bowls-drinkers',
        name: 'bowls-drinkers',
        component: DogsBowlsDrinkers
    },
    {
        path: '/for-dogs/trays-toilets',
        name: 'trays-toilets',
        component: DogsTraysToilets
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
