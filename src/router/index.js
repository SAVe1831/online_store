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
import DogsAccessories from "@/pages/ForDogs/DogsAccessories.vue"
import DogsCollarsLeashes from "@/pages/ForDogs/DogsCollarsLeashes.vue"
import DogsCarrying from "@/pages/ForDogs/DogsCarrying.vue"
import DogsBeds from "@/pages/ForDogs/DogsBeds.vue"
import DogsCagesAviaries from "@/pages/ForDogs/DogsCagesAviaries.vue"
import DogsToys from "@/pages/ForDogs/DogsToys.vue"
import RodentsFood from "@/pages/ForRodents/RodentsFood.vue"
import RodentsFeedersDrinkers from "@/pages/ForRodents/RodentsFeedersDrinkers.vue"
import RodentsLittersFillers from "@/pages/ForRodents/RodentsLittersFillers.vue"
import RodentsCages from "@/pages/ForRodents/RodentsCages.vue"
import RodentsHammocksHouses from "@/pages/ForRodents/RodentsHammocksHouses.vue"
import RodentsCarrying from "@/pages/ForRodents/RodentsCarrying.vue"
import RodentsToys from "@/pages/ForRodents/RodentsToys.vue"
import BirdsFood from "@/pages/ForBirds/BirdsFood.vue"
import BirdsFeedersDrinkers from "@/pages/ForBirds/BirdsFeedersDrinkers.vue"
import BirdsCages from "@/pages/ForBirds/BirdsCages.vue"
import BirdsCarrying from "@/pages/ForBirds/BirdsCarrying.vue"
import BirdsNestsHouses from "@/pages/ForBirds/BirdsNestsHouses.vue"
import BirdsToys from "@/pages/ForBirds/BirdsToys.vue"
import Favorites from "@/pages/Favorites.vue"
import AuthSignIn from '@/pages/AuthSignIn.vue'
import AuthSignUp from '@/pages/AuthSignUp.vue'
import PersonalArea from '@/pages/PersonalArea.vue'
import { useAuthStore } from '@/stores/auth'











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
        path: '/cats-dry-food',
        name: 'cats-dry-food',
        component: CatsDryFood
    },
    {
        path: '/cats-wet-food',
        name: 'cats-wet-food',
        component: CatsWetFood
    },
    {
        path: '/cats-bowls-drinkers',
        name: 'cats-bowls-drinkers',
        component: CatsBowlsDrinkers
    },
    {
        path: '/cats-trays-toilets',
        name: 'cats-trays-toilets',
        component: CatsTraysToilets
    },
    {
        path: '/cats-fillers',
        name: 'cats-fillers',
        component: CatsFillers
    },
    {
        path: '/cats-scratching-posts',
        name: 'cats-scratching-posts',
        component: CatsScratchingPosts
    },
    {
        path: '/cats-carrying',
        name: 'cats-carrying',
        component: CatsCarrying
    },
    {
        path: '/cats-beds',
        name: 'cats-beds',
        component: CatsBeds
    },
    {
        path: '/cats-toys',
        name: 'cats-toys',
        component: CatsToys
    },
    {
        path: '/dogs-dry-food',
        name: 'dry-food',
        component: DogsDryFood
    },
    {
        path: '/dogs-wet-food',
        name: 'dogs-wet-food',
        component: DogsWetFood
    },
    {
        path: '/dogs-bowls-drinkers',
        name: 'dogs-bowls-drinkers',
        component: DogsBowlsDrinkers
    },
    {
        path: '/dogs-trays-toilets',
        name: 'dogs-trays-toilets',
        component: DogsTraysToilets
    },
    {
        path: '/dogs-accessories',
        name: 'dogs-accessories',
        component: DogsAccessories
    },
    {
        path: '/dogs-collars-leashes',
        name: 'dogs-collars-leashes',
        component: DogsCollarsLeashes
    },
    {
        path: '/dogs-carrying',
        name: 'dogs-carrying',
        component: DogsCarrying
    },
    {
        path: '/dogs-beds',
        name: 'dogs-beds',
        component: DogsBeds
    },
    {
        path: '/dogs-cages-aviaries',
        name: 'dogs-cages-aviaries',
        component: DogsCagesAviaries
    },
    {
        path: '/dogs-toys',
        name: 'dogs-toys',
        component: DogsToys
    },
    {
        path: '/rodents-food',
        name: 'rodents-food',
        component: RodentsFood
    },
    {
        path: '/rodents-feeders-drinkers',
        name: 'rodents-feeders-drinkers',
        component: RodentsFeedersDrinkers
    },
    {
        path: '/rodents-litters-fillers',
        name: 'rodents-litters-fillers',
        component: RodentsLittersFillers
    },
    {
        path: '/rodents-cages',
        name: 'rodents-cages',
        component: RodentsCages
    },
    {
        path: '/rodents-hammocks-houses',
        name: 'rodents-hammocks-houses',
        component: RodentsHammocksHouses
    },
    {
        path: '/rodents-carrying',
        name: 'rodents-carrying',
        component: RodentsCarrying
    },
    {
        path: '/rodents-toys',
        name: 'rodents-toys',
        component: RodentsToys
    },
    {
        path: '/birds-food',
        name: 'birds-food',
        component: BirdsFood
    },
    {
        path: '/birds-feeders-drinkers',
        name: 'birds-feeders-drinkers',
        component: BirdsFeedersDrinkers
    },
    {
        path: '/birds-cages',
        name: 'birds-cages',
        component: BirdsCages
    },
    {
        path: '/birds-carrying',
        name: 'birds-carrying',
        component: BirdsCarrying
    },
    {
        path: '/birds-nests-houses',
        name: 'birds-nests-houses',
        component: BirdsNestsHouses
    },
    {
        path: '/birds-toys',
        name: 'birds-toys',
        component: BirdsToys
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: Favorites
    },
    {
        path: '/auth-sign-in',
        name: 'auth-sign-in',
        component: AuthSignIn,
        meta:{auth: false}
    },
    {
        path: '/auth-sign-up',
        name: 'auth-sign-up',
        component: AuthSignUp,
        meta:{auth: false}
    },
    {
        path: '/personal-area',
        name: 'personal-area',
        component:  PersonalArea,
        meta:{auth: true}
    }
    
]


const router = createRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
    history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
  
    if (to.meta.auth && !authStore.userInfo.token) {
      next('/auth-sign-in')
    } else if (to.meta.auth === false && authStore.userInfo.token) {
      next('/personal-area')
    } else {
      next();
    }
  })

export default router
