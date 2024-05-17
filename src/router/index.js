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

import CatPurinaDarling from '@/pages/ProductsDetails/CatPurinaDarling.vue'
import CatDreamies from '@/pages/ProductsDetails/CatDreamies.vue'
import CatWhiskas from '@/pages/ProductsDetails/CatWhiskas.vue'
import CatKitekat from '@/pages/ProductsDetails/CatKitekat.vue'
import CatPurinaOne from '@/pages/ProductsDetails/CatPurinaOne.vue'
import CatPerfectFit from '@/pages/ProductsDetails/CatPerfectFit.vue'
import CatAward from '@/pages/ProductsDetails/CatAward.vue'
import CatWhiskasWet from '@/pages/ProductsDetails/CatWhiskasWet.vue'
import CatFelixWet from '@/pages/ProductsDetails/CatFelixWet.vue'
import CatGourmeWet from '@/pages/ProductsDetails/CatGourmeWet.vue'
import CatRoyalCaninWet from '@/pages/ProductsDetails/CatRoyalCaninWet.vue'
import CatBestDinnerWet from '@/pages/ProductsDetails/CatBestDinnerWet.vue'
import CatProPlanWet from '@/pages/ProductsDetails/CatProPlanWet.vue'
import CatMyauchWet from '@/pages/ProductsDetails/CatMyauchWet.vue'
import CatBowl1 from '@/pages/ProductsDetails/CatBowl1.vue'
import CatBowl2 from '@/pages/ProductsDetails/CatBowl2.vue'
import CatBowl3 from '@/pages/ProductsDetails/CatBowl3.vue'
import CatBowl4 from '@/pages/ProductsDetails/CatBowl4.vue'
import CatBowl5 from '@/pages/ProductsDetails/CatBowl5.vue'
import CatBowl6 from '@/pages/ProductsDetails/CatBowl6.vue'
import CatBowl7 from '@/pages/ProductsDetails/CatBowl7.vue'
import CatTray1 from '@/pages/ProductsDetails/CatTray1.vue'
import CatTray2 from '@/pages/ProductsDetails/CatTray2.vue'
import CatTray3 from '@/pages/ProductsDetails/CatTray3.vue'
import CatTray4 from '@/pages/ProductsDetails/CatTray4.vue'
import CatTray5 from '@/pages/ProductsDetails/CatTray5.vue'
import CatTray6 from '@/pages/ProductsDetails/CatTray6.vue'
import CatTray7 from '@/pages/ProductsDetails/CatTray7.vue'
import CatFiller1 from '@/pages/ProductsDetails/CatFiller1.vue'
import CatFiller2 from '@/pages/ProductsDetails/CatFiller2.vue'
import CatFiller3 from '@/pages/ProductsDetails/CatFiller3.vue'
import CatFiller4 from '@/pages/ProductsDetails/CatFiller4.vue'
import CatFiller5 from '@/pages/ProductsDetails/CatFiller5.vue'
import CatFiller6 from '@/pages/ProductsDetails/CatFiller6.vue'
import CatScratch1 from '@/pages/ProductsDetails/CatScratch1.vue'
import CatScratch2 from '@/pages/ProductsDetails/CatScratch2.vue'
import CatScratch3 from '@/pages/ProductsDetails/CatScratch3.vue'
import CatScratch4 from '@/pages/ProductsDetails/CatScratch4.vue'
import CatScratch5 from '@/pages/ProductsDetails/CatScratch5.vue'
import CatScratch6 from '@/pages/ProductsDetails/CatScratch6.vue'
import CatCarrying1 from '@/pages/ProductsDetails/CatCarrying1.vue'
import CatCarrying2 from '@/pages/ProductsDetails/CatCarrying2.vue'
import CatCarrying3 from '@/pages/ProductsDetails/CatCarrying3.vue'
import CatCarrying4 from '@/pages/ProductsDetails/CatCarrying4.vue'
import CatCarrying5 from '@/pages/ProductsDetails/CatCarrying5.vue'
import CatCarrying6 from '@/pages/ProductsDetails/CatCarrying6.vue'
import CatBed1 from '@/pages/ProductsDetails/CatBed1.vue'
import CatBed2 from '@/pages/ProductsDetails/CatBed2.vue'
import CatBed3 from '@/pages/ProductsDetails/CatBed3.vue'
import CatBed4 from '@/pages/ProductsDetails/CatBed4.vue'
import CatBed5 from '@/pages/ProductsDetails/CatBed5.vue'
import CatBed6 from '@/pages/ProductsDetails/CatBed6.vue'
import CatToy1 from '@/pages/ProductsDetails/CatToy1.vue'
import CatToy2 from '@/pages/ProductsDetails/CatToy2.vue'
import CatToy3 from '@/pages/ProductsDetails/CatToy3.vue'
import CatToy4 from '@/pages/ProductsDetails/CatToy4.vue'
import CatToy5 from '@/pages/ProductsDetails/CatToy5.vue'
import CatToy6 from '@/pages/ProductsDetails/CatToy6.vue'
import DogFoodDry1 from '@/pages/ProductsDetails/DogFoodDry1.vue'
import DogFoodDry2 from '@/pages/ProductsDetails/DogFoodDry2.vue'
import DogFoodDry3 from '@/pages/ProductsDetails/DogFoodDry3.vue'
import DogFoodDry4 from '@/pages/ProductsDetails/DogFoodDry4.vue'
import DogFoodDry5 from '@/pages/ProductsDetails/DogFoodDry5.vue'
import DogFoodDry6 from '@/pages/ProductsDetails/DogFoodDry6.vue'
import DogFoodDry7 from '@/pages/ProductsDetails/DogFoodDry7.vue'
import DogFoodWet1 from '@/pages/ProductsDetails/DogFoodWet1.vue'
import DogFoodWet2 from '@/pages/ProductsDetails/DogFoodWet2.vue'
import DogFoodWet3 from '@/pages/ProductsDetails/DogFoodWet3.vue'
import DogFoodWet4 from '@/pages/ProductsDetails/DogFoodWet4.vue'
import DogFoodWet5 from '@/pages/ProductsDetails/DogFoodWet5.vue'
import DogFoodWet6 from '@/pages/ProductsDetails/DogFoodWet6.vue'
import DogFoodWet7 from '@/pages/ProductsDetails/DogFoodWet7.vue'
import DogBowl1 from '@/pages/ProductsDetails/DogBowl1.vue'
import DogBowl2 from '@/pages/ProductsDetails/DogBowl2.vue'
import DogBowl3 from '@/pages/ProductsDetails/DogBowl3.vue'
import DogBowl4 from '@/pages/ProductsDetails/DogBowl4.vue'
import DogBowl5 from '@/pages/ProductsDetails/DogBowl5.vue'
import DogBowl6 from '@/pages/ProductsDetails/DogBowl6.vue'
import DogTray1 from '@/pages/ProductsDetails/DogTray1.vue'
import DogTray2 from '@/pages/ProductsDetails/DogTray2.vue'
import DogTray3 from '@/pages/ProductsDetails/DogTray3.vue'
import DogTray4 from '@/pages/ProductsDetails/DogTray4.vue'
import DogTray5 from '@/pages/ProductsDetails/DogTray5.vue'
import DogTray6 from '@/pages/ProductsDetails/DogTray6.vue'
import DogAccessorie1 from '@/pages/ProductsDetails/DogAccessorie1.vue'
import DogAccessorie2 from '@/pages/ProductsDetails/DogAccessorie2.vue'
import DogAccessorie3 from '@/pages/ProductsDetails/DogAccessorie3.vue'
import DogAccessorie4 from '@/pages/ProductsDetails/DogAccessorie4.vue'
import DogAccessorie5 from '@/pages/ProductsDetails/DogAccessorie5.vue'
import DogAccessorie6 from '@/pages/ProductsDetails/DogAccessorie6.vue'
import DogCollar1 from '@/pages/ProductsDetails/DogCollar1.vue'
import DogCollar2 from '@/pages/ProductsDetails/DogCollar2.vue'
import DogCollar3 from '@/pages/ProductsDetails/DogCollar3.vue'
import DogCollar4 from '@/pages/ProductsDetails/DogCollar4.vue'
import DogCollar5 from '@/pages/ProductsDetails/DogCollar5.vue'
import DogCollar6 from '@/pages/ProductsDetails/DogCollar6.vue'
import DogCarrying1 from '@/pages/ProductsDetails/DogCarrying1.vue'
import DogCarrying2 from '@/pages/ProductsDetails/DogCarrying2.vue'
import DogCarrying3 from '@/pages/ProductsDetails/DogCarrying3.vue'
import DogCarrying4 from '@/pages/ProductsDetails/DogCarrying4.vue'
import DogCarrying5 from '@/pages/ProductsDetails/DogCarrying5.vue'
import DogCarrying6 from '@/pages/ProductsDetails/DogCarrying6.vue'
import DogBed1 from '@/pages/ProductsDetails/DogBed1.vue'
import DogBed2 from '@/pages/ProductsDetails/DogBed2.vue'
import DogBed3 from '@/pages/ProductsDetails/DogBed3.vue'
import DogBed4 from '@/pages/ProductsDetails/DogBed4.vue'
import DogBed5 from '@/pages/ProductsDetails/DogBed5.vue'
import DogBed6 from '@/pages/ProductsDetails/DogBed6.vue'
import DogCage1 from '@/pages/ProductsDetails/DogCage1.vue'
import DogCage2 from '@/pages/ProductsDetails/DogCage2.vue'
import DogCage3 from '@/pages/ProductsDetails/DogCage3.vue'
import DogCage4 from '@/pages/ProductsDetails/DogCage4.vue'
import DogCage5 from '@/pages/ProductsDetails/DogCage5.vue'
import DogCage6 from '@/pages/ProductsDetails/DogCage6.vue'
import DogToy1 from '@/pages/ProductsDetails/DogToy1.vue'
import DogToy2 from '@/pages/ProductsDetails/DogToy2.vue'
import DogToy3 from '@/pages/ProductsDetails/DogToy3.vue'
import DogToy4 from '@/pages/ProductsDetails/DogToy4.vue'
import DogToy5 from '@/pages/ProductsDetails/DogToy5.vue'
import DogToy6 from '@/pages/ProductsDetails/DogToy6.vue'
import RodentFood1 from '@/pages/ProductsDetails/RodentFood1.vue'
import RodentFood2 from '@/pages/ProductsDetails/RodentFood2.vue'
import RodentFood3 from '@/pages/ProductsDetails/RodentFood3.vue'
import RodentFood4 from '@/pages/ProductsDetails/RodentFood4.vue'
import RodentFood5 from '@/pages/ProductsDetails/RodentFood5.vue'
import RodentFood6 from '@/pages/ProductsDetails/RodentFood6.vue'
import RodentFood7 from '@/pages/ProductsDetails/RodentFood7.vue'
import RodentFeeder1 from '@/pages/ProductsDetails/RodentFeeder1.vue'
import RodentFeeder2 from '@/pages/ProductsDetails/RodentFeeder2.vue'
import RodentFeeder3 from '@/pages/ProductsDetails/RodentFeeder3.vue'
import RodentFeeder4 from '@/pages/ProductsDetails/RodentFeeder4.vue'
import RodentFeeder5 from '@/pages/ProductsDetails/RodentFeeder5.vue'
import RodentFeeder6 from '@/pages/ProductsDetails/RodentFeeder6.vue'
import RodentLitter1 from '@/pages/ProductsDetails/RodentLitter1.vue'
import RodentLitter2 from '@/pages/ProductsDetails/RodentLitter2.vue'
import RodentLitter3 from '@/pages/ProductsDetails/RodentLitter3.vue'
import RodentLitter4 from '@/pages/ProductsDetails/RodentLitter4.vue'
import RodentLitter5 from '@/pages/ProductsDetails/RodentLitter5.vue'
import RodentLitter6 from '@/pages/ProductsDetails/RodentLitter6.vue'
import RodentCage1 from '@/pages/ProductsDetails/RodentCage1.vue'
import RodentCage2 from '@/pages/ProductsDetails/RodentCage2.vue'
import RodentCage3 from '@/pages/ProductsDetails/RodentCage3.vue'
import RodentCage4 from '@/pages/ProductsDetails/RodentCage4.vue'
import RodentCage5 from '@/pages/ProductsDetails/RodentCage5.vue'
import RodentCage6 from '@/pages/ProductsDetails/RodentCage6.vue'
import RodentHouse1 from '@/pages/ProductsDetails/RodentHouse1.vue'
import RodentHouse2 from '@/pages/ProductsDetails/RodentHouse2.vue'
import RodentHouse3 from '@/pages/ProductsDetails/RodentHouse3.vue'
import RodentHouse4 from '@/pages/ProductsDetails/RodentHouse4.vue'
import RodentHouse5 from '@/pages/ProductsDetails/RodentHouse5.vue'
import RodentHouse6 from '@/pages/ProductsDetails/RodentHouse6.vue'
import RodentCarrying1 from '@/pages/ProductsDetails/RodentCarrying1.vue'
import RodentCarrying2 from '@/pages/ProductsDetails/RodentCarrying2.vue'
import RodentCarrying3 from '@/pages/ProductsDetails/RodentCarrying3.vue'
import RodentCarrying4 from '@/pages/ProductsDetails/RodentCarrying4.vue'
import RodentCarrying5 from '@/pages/ProductsDetails/RodentCarrying5.vue'
import RodentCarrying6 from '@/pages/ProductsDetails/RodentCarrying6.vue'
import RodentToy1 from '@/pages/ProductsDetails/RodentToy1.vue'
import RodentToy2 from '@/pages/ProductsDetails/RodentToy2.vue'
import RodentToy3 from '@/pages/ProductsDetails/RodentToy3.vue'
import RodentToy4 from '@/pages/ProductsDetails/RodentToy4.vue'
import RodentToy5 from '@/pages/ProductsDetails/RodentToy5.vue'
import RodentToy6 from '@/pages/ProductsDetails/RodentToy6.vue'
import BirdsFood1 from '@/pages/ProductsDetails/BirdsFood1.vue'
import BirdsFood2 from '@/pages/ProductsDetails/BirdsFood2.vue'
import BirdsFood3 from '@/pages/ProductsDetails/BirdsFood3.vue'
import BirdsFood4 from '@/pages/ProductsDetails/BirdsFood4.vue'
import BirdsFood5 from '@/pages/ProductsDetails/BirdsFood5.vue'
import BirdsFood6 from '@/pages/ProductsDetails/BirdsFood6.vue'
import BirdsFood7 from '@/pages/ProductsDetails/BirdsFood7.vue'
import BirdsFeeder1 from '@/pages/ProductsDetails/BirdsFeeder1.vue'
import BirdsFeeder2 from '@/pages/ProductsDetails/BirdsFeeder2.vue'
import BirdsFeeder3 from '@/pages/ProductsDetails/BirdsFeeder3.vue'
import BirdsFeeder4 from '@/pages/ProductsDetails/BirdsFeeder4.vue'
import BirdsFeeder5 from '@/pages/ProductsDetails/BirdsFeeder5.vue'
import BirdsFeeder6 from '@/pages/ProductsDetails/BirdsFeeder6.vue'
import BirdsCage1 from '@/pages/ProductsDetails/BirdsCage1.vue'
import BirdsCage2 from '@/pages/ProductsDetails/BirdsCage2.vue'
import BirdsCage3 from '@/pages/ProductsDetails/BirdsCage3.vue'
import BirdsCage4 from '@/pages/ProductsDetails/BirdsCage4.vue'
import BirdsCage5 from '@/pages/ProductsDetails/BirdsCage5.vue'
import BirdsCage6 from '@/pages/ProductsDetails/BirdsCage6.vue'
import BirdsCarrying1 from '@/pages/ProductsDetails/BirdsCarrying1.vue'
import BirdsCarrying2 from '@/pages/ProductsDetails/BirdsCarrying2.vue'
import BirdsCarrying3 from '@/pages/ProductsDetails/BirdsCarrying3.vue'
import BirdsCarrying4 from '@/pages/ProductsDetails/BirdsCarrying4.vue'
import BirdsCarrying5 from '@/pages/ProductsDetails/BirdsCarrying5.vue'
import BirdsCarrying6 from '@/pages/ProductsDetails/BirdsCarrying6.vue'
import BirdsHouse1 from '@/pages/ProductsDetails/BirdsHouse1.vue'
import BirdsHouse2 from '@/pages/ProductsDetails/BirdsHouse2.vue'
import BirdsHouse3 from '@/pages/ProductsDetails/BirdsHouse3.vue'
import BirdsHouse4 from '@/pages/ProductsDetails/BirdsHouse4.vue'
import BirdsHouse5 from '@/pages/ProductsDetails/BirdsHouse5.vue'
import BirdsHouse6 from '@/pages/ProductsDetails/BirdsHouse6.vue'
import BirdsToy1 from '@/pages/ProductsDetails/BirdsToy1.vue'
import BirdsToy2 from '@/pages/ProductsDetails/BirdsToy2.vue'
import BirdsToy3 from '@/pages/ProductsDetails/BirdsToy3.vue'
import BirdsToy4 from '@/pages/ProductsDetails/BirdsToy4.vue'
import BirdsToy5 from '@/pages/ProductsDetails/BirdsToy5.vue'
import BirdsToy6 from '@/pages/ProductsDetails/BirdsToy6.vue'

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
        path: '/product/0',
        name: 'cat-purina-darling',
        component:  CatPurinaDarling
    },
    {
        path: '/product/1',
        name: 'cat-dreamies',
        component:  CatDreamies
    },
    {
        path: '/product/2',
        name: 'cat-whiskas',
        component:  CatWhiskas
    },
    {
        path: '/product/3',
        name: 'cat-kitekat',
        component:  CatKitekat
    },
    {
        path: '/product/4',
        name: 'cat-purina-one',
        component:  CatPurinaOne
    },
    {
        path: '/product/5',
        name: 'cat-perfect-fit',
        component:  CatPerfectFit
    },
    {
        path: '/product/6',
        name: 'cat-award',
        component:  CatAward
    },
    {
        path: '/product/10',
        name: 'cat-whiskas-wet',
        component:  CatWhiskasWet
    },
    {
        path: '/product/11',
        name: 'cat-felix-wet',
        component:  CatFelixWet
    },
    {
        path: '/product/12',
        name: 'cat-gourme-wet',
        component:  CatGourmeWet
    },
    {
        path: '/product/13',
        name: 'cat-royal-canin-wet',
        component:  CatRoyalCaninWet
    },
    {
        path: '/product/14',
        name: 'cat-best-dinner-wet',
        component:  CatBestDinnerWet
    },
    {
        path: '/product/15',
        name: 'cat-pro-plan-wet',
        component:  CatProPlanWet
    },
    {
        path: '/product/16',
        name: 'cat-myauch-wet',
        component:  CatMyauchWet
    },
    {
        path: '/product/20',
        name: 'cat-bowl1',
        component:  CatBowl1
    },
    {
        path: '/product/21',
        name: 'cat-bowl2',
        component:  CatBowl2
    },
    {
        path: '/product/22',
        name: 'cat-bowl3',
        component:  CatBowl3
    },
    {
        path: '/product/23',
        name: 'cat-bowl4',
        component:  CatBowl4
    },
    {
        path: '/product/24',
        name: 'cat-bowl5',
        component:  CatBowl5
    },
    {
        path: '/product/25',
        name: 'cat-bowl6',
        component:  CatBowl6
    },
    {
        path: '/product/26',
        name: 'cat-bowl7',
        component:  CatBowl7
    },
    {
        path: '/product/30',
        name: 'cat-tray1',
        component:  CatTray1
    },
    {
        path: '/product/31',
        name: 'cat-tray2',
        component:  CatTray2
    },
    {
        path: '/product/32',
        name: 'cat-tray3',
        component:  CatTray3
    },
    {
        path: '/product/33',
        name: 'cat-tray4',
        component:  CatTray4
    },
    {
        path: '/product/34',
        name: 'cat-tray5',
        component:  CatTray5
    },
    {
        path: '/product/35',
        name: 'cat-tray6',
        component:  CatTray6
    },
    {
        path: '/product/36',
        name: 'cat-tray7',
        component:  CatTray7
    },
    {
        path: '/product/40',
        name: 'cat-filler1',
        component:  CatFiller1
    },
    {
        path: '/product/41',
        name: 'cat-filler2',
        component:  CatFiller2
    },
    {
        path: '/product/42',
        name: 'cat-filler3',
        component:  CatFiller3
    },
    {
        path: '/product/43',
        name: 'cat-filler4',
        component:  CatFiller4
    },
    {
        path: '/product/44',
        name: 'cat-filler5',
        component:  CatFiller5
    },
    {
        path: '/product/45',
        name: 'cat-filler6',
        component:  CatFiller6
    },
    {
        path: '/product/50',
        name: 'cat-scratch1',
        component:  CatScratch1
    },
    {
        path: '/product/51',
        name: 'cat-scratch2',
        component:  CatScratch2
    },
    {
        path: '/product/52',
        name: 'cat-scratch3',
        component:  CatScratch3
    },
    {
        path: '/product/53',
        name: 'cat-scratch4',
        component:  CatScratch4
    },
    {
        path: '/product/54',
        name: 'cat-scratch5',
        component:  CatScratch5
    },
    {
        path: '/product/55',
        name: 'cat-scratch6',
        component:  CatScratch6
    },
    {
        path: '/product/60',
        name: 'cat-carrying1',
        component:  CatCarrying1
    },
    {
        path: '/product/61',
        name: 'cat-carrying2',
        component:  CatCarrying2
    },
    {
        path: '/product/62',
        name: 'cat-carrying3',
        component:  CatCarrying3
    },
    {
        path: '/product/63',
        name: 'cat-carrying4',
        component:  CatCarrying4
    },
    {
        path: '/product/64',
        name: 'cat-carrying5',
        component:  CatCarrying5
    },
    {
        path: '/product/65',
        name: 'cat-carrying6',
        component:  CatCarrying6
    },
    {
        path: '/product/70',
        name: 'cat-bed1',
        component:  CatBed1
    },
    {
        path: '/product/71',
        name: 'cat-bed2',
        component:  CatBed2
    },
    {
        path: '/product/72',
        name: 'cat-bed3',
        component:  CatBed3
    },
    {
        path: '/product/73',
        name: 'cat-bed4',
        component:  CatBed4
    },
    {
        path: '/product/74',
        name: 'cat-bed5',
        component:  CatBed5
    },
    {
        path: '/product/75',
        name: 'cat-bed6',
        component:  CatBed6
    },
    {
        path: '/product/80',
        name: 'cat-toy1',
        component:  CatToy1
    },
    {
        path: '/product/81',
        name: 'cat-toy2',
        component:  CatToy2
    },
    {
        path: '/product/82',
        name: 'cat-toy3',
        component:  CatToy3
    },
    {
        path: '/product/83',
        name: 'cat-toy4',
        component:  CatToy4
    },
    {
        path: '/product/84',
        name: 'cat-toy5',
        component:  CatToy5
    },
    {
        path: '/product/85',
        name: 'cat-toy6',
        component:  CatToy6
    },
    {
        path: '/product/90',
        name: 'dog-food-dry1',
        component:  DogFoodDry1
    },
    {
        path: '/product/91',
        name: 'dog-food-dry2',
        component:  DogFoodDry2
    },
    {
        path: '/product/92',
        name: 'dog-food-dry3',
        component:  DogFoodDry3
    },
    {
        path: '/product/93',
        name: 'dog-food-dry4',
        component:  DogFoodDry4
    },
    {
        path: '/product/94',
        name: 'dog-food-dry5',
        component:  DogFoodDry5
    },
    {
        path: '/product/95',
        name: 'dog-food-dry6',
        component:  DogFoodDry6
    },
    {
        path: '/product/96',
        name: 'dog-food-dry7',
        component:  DogFoodDry7
    },
    {
        path: '/product/100',
        name: 'dog-food-wet1',
        component:  DogFoodWet1
    },
    {
        path: '/product/101',
        name: 'dog-food-wet2',
        component:  DogFoodWet2
    },
    {
        path: '/product/102',
        name: 'dog-food-wet3',
        component:  DogFoodWet3
    },
    {
        path: '/product/103',
        name: 'dog-food-wet4',
        component:  DogFoodWet4
    },
    {
        path: '/product/104',
        name: 'dog-food-wet5',
        component:  DogFoodWet5
    },
    {
        path: '/product/105',
        name: 'dog-food-wet6',
        component:  DogFoodWet6
    },
    {
        path: '/product/106',
        name: 'dog-food-wet7',
        component:  DogFoodWet7
    },
    {
        path: '/product/110',
        name: 'dog-bowl1',
        component:  DogBowl1
    },
    {
        path: '/product/111',
        name: 'dog-bowl2',
        component:  DogBowl2
    },
    {
        path: '/product/112',
        name: 'dog-bowl3',
        component:  DogBowl3
    },
    {
        path: '/product/113',
        name: 'dog-bowl4',
        component:  DogBowl4
    },
    {
        path: '/product/114',
        name: 'dog-bowl5',
        component:  DogBowl5
    },
    {
        path: '/product/115',
        name: 'dog-bowl6',
        component:  DogBowl6
    },
    {
        path: '/product/120',
        name: 'dog-tray1',
        component:  DogTray1
    },
    {
        path: '/product/121',
        name: 'dog-tray2',
        component:  DogTray2
    },
    {
        path: '/product/122',
        name: 'dog-tray3',
        component:  DogTray3
    },
    {
        path: '/product/123',
        name: 'dog-tray4',
        component:  DogTray4
    },
    {
        path: '/product/124',
        name: 'dog-tray5',
        component:  DogTray5
    },
    {
        path: '/product/125',
        name: 'dog-tray6',
        component:  DogTray6
    },
    {
        path: '/product/130',
        name: 'dog-accessorie1',
        component:  DogAccessorie1
    },
    {
        path: '/product/131',
        name: 'dog-accessorie2',
        component:  DogAccessorie2
    },
    {
        path: '/product/132',
        name: 'dog-accessorie3',
        component:  DogAccessorie3
    },
    {
        path: '/product/133',
        name: 'dog-accessorie4',
        component:  DogAccessorie4
    },
    {
        path: '/product/134',
        name: 'dog-accessorie5',
        component:  DogAccessorie5
    },
    {
        path: '/product/135',
        name: 'dog-accessorie6',
        component:  DogAccessorie6
    },
    {
        path: '/product/140',
        name: 'dog-collar1',
        component:  DogCollar1
    },
    {
        path: '/product/141',
        name: 'dog-collar2',
        component:  DogCollar2
    },
    {
        path: '/product/142',
        name: 'dog-collar3',
        component:  DogCollar3
    },
    {
        path: '/product/143',
        name: 'dog-collar4',
        component:  DogCollar4
    },
    {
        path: '/product/144',
        name: 'dog-collar5',
        component:  DogCollar5
    },
    {
        path: '/product/145',
        name: 'dog-collar6',
        component:  DogCollar6
    },
    {
        path: '/product/150',
        name: 'dog-carrying1',
        component:  DogCarrying1
    },
    {
        path: '/product/151',
        name: 'dog-carrying2',
        component:  DogCarrying2
    },
    {
        path: '/product/152',
        name: 'dog-carrying3',
        component:  DogCarrying3
    },
    {
        path: '/product/153',
        name: 'dog-carrying4',
        component:  DogCarrying4
    },
    {
        path: '/product/154',
        name: 'dog-carrying5',
        component:  DogCarrying5
    },
    {
        path: '/product/155',
        name: 'dog-carrying6',
        component:  DogCarrying6
    },
    {
        path: '/product/160',
        name: 'dog-bed1',
        component:  DogBed1
    },
    {
        path: '/product/161',
        name: 'dog-bed2',
        component:  DogBed2
    },
    {
        path: '/product/162',
        name: 'dog-bed3',
        component:  DogBed3
    },
    {
        path: '/product/163',
        name: 'dog-bed4',
        component:  DogBed4
    },
    {
        path: '/product/164',
        name: 'dog-bed5',
        component:  DogBed5
    },
    {
        path: '/product/165',
        name: 'dog-bed6',
        component:  DogBed6
    },
    {
        path: '/product/170',
        name: 'dog-cage1',
        component:  DogCage1
    },
    {
        path: '/product/171',
        name: 'dog-cage2',
        component:  DogCage2
    },
    {
        path: '/product/172',
        name: 'dog-cage3',
        component:  DogCage3
    },
    {
        path: '/product/173',
        name: 'dog-cage4',
        component:  DogCage4
    },
    {
        path: '/product/174',
        name: 'dog-cage5',
        component:  DogCage5
    },
    {
        path: '/product/175',
        name: 'dog-cage6',
        component:  DogCage6
    },
    {
        path: '/product/180',
        name: 'dog-toy1',
        component:  DogToy1
    },
    {
        path: '/product/181',
        name: 'dog-toy2',
        component:  DogToy2
    },
    {
        path: '/product/182',
        name: 'dog-toy3',
        component:  DogToy3
    },
    {
        path: '/product/183',
        name: 'dog-toy4',
        component:  DogToy4
    },
    {
        path: '/product/184',
        name: 'dog-toy5',
        component:  DogToy5
    },
    {
        path: '/product/185',
        name: 'dog-toy6',
        component:  DogToy6
    },
    {
        path: '/product/190',
        name: 'rodent-food1',
        component:  RodentFood1
    },
    {
        path: '/product/191',
        name: 'rodent-food2',
        component:  RodentFood2
    },
    {
        path: '/product/192',
        name: 'rodent-food3',
        component:  RodentFood3
    },
    {
        path: '/product/193',
        name: 'rodent-food4',
        component:  RodentFood4
    },
    {
        path: '/product/194',
        name: 'rodent-food5',
        component:  RodentFood5
    },
    {
        path: '/product/195',
        name: 'rodent-food6',
        component:  RodentFood6
    },
    {
        path: '/product/196',
        name: 'rodent-food7',
        component:  RodentFood7
    },
    {
        path: '/product/200',
        name: 'rodent-feeder1',
        component:  RodentFeeder1
    },
    {
        path: '/product/201',
        name: 'rodent-feeder2',
        component:  RodentFeeder2
    },
    {
        path: '/product/202',
        name: 'rodent-feeder3',
        component:  RodentFeeder3
    },
    {
        path: '/product/203',
        name: 'rodent-feeder4',
        component:  RodentFeeder4
    },
    {
        path: '/product/204',
        name: 'rodent-feeder5',
        component:  RodentFeeder5
    },
    {
        path: '/product/205',
        name: 'rodent-feeder6',
        component:  RodentFeeder6
    },
    {
        path: '/product/210',
        name: 'rodent-litter1',
        component:  RodentLitter1
    },
    {
        path: '/product/211',
        name: 'rodent-litter2',
        component:  RodentLitter2
    },
    {
        path: '/product/212',
        name: 'rodent-litter3',
        component:  RodentLitter3
    },
    {
        path: '/product/213',
        name: 'rodent-litter4',
        component:  RodentLitter4
    },
    {
        path: '/product/214',
        name: 'rodent-litter5',
        component:  RodentLitter5
    },
    {
        path: '/product/215',
        name: 'rodent-litter6',
        component:  RodentLitter6
    },
    {
        path: '/product/220',
        name: 'rodent-cage1',
        component:  RodentCage1
    },
    {
        path: '/product/221',
        name: 'rodent-cage2',
        component:  RodentCage2
    },
    {
        path: '/product/222',
        name: 'rodent-cage3',
        component:  RodentCage3
    },
    {
        path: '/product/223',
        name: 'rodent-cage4',
        component:  RodentCage4
    },
    {
        path: '/product/224',
        name: 'rodent-cage5',
        component:  RodentCage5
    },
    {
        path: '/product/225',
        name: 'rodent-cage6',
        component:  RodentCage6
    },
    {
        path: '/product/230',
        name: 'rodent-house1',
        component:  RodentHouse1
    },
    {
        path: '/product/231',
        name: 'rodent-house2',
        component:  RodentHouse2
    },
    {
        path: '/product/232',
        name: 'rodent-house3',
        component:  RodentHouse3
    },
    {
        path: '/product/233',
        name: 'rodent-house4',
        component:  RodentHouse4
    },
    {
        path: '/product/234',
        name: 'rodent-house5',
        component:  RodentHouse5
    },
    {
        path: '/product/235',
        name: 'rodent-house6',
        component:  RodentHouse6
    },
    {
        path: '/product/240',
        name: 'rodent-carrying1',
        component:  RodentCarrying1
    },
    {
        path: '/product/241',
        name: 'rodent-carrying2',
        component:  RodentCarrying2
    },
    {
        path: '/product/242',
        name: 'rodent-carrying3',
        component:  RodentCarrying3
    },
    {
        path: '/product/243',
        name: 'rodent-carrying4',
        component:  RodentCarrying4
    },
    {
        path: '/product/244',
        name: 'rodent-carrying5',
        component:  RodentCarrying5
    },
    {
        path: '/product/245',
        name: 'rodent-carrying6',
        component:  RodentCarrying6
    },
    {
        path: '/product/250',
        name: 'rodent-toy1',
        component:  RodentToy1
    },
    {
        path: '/product/251',
        name: 'rodent-toy2',
        component:  RodentToy2
    },
    {
        path: '/product/252',
        name: 'rodent-toy3',
        component:  RodentToy3
    },
    {
        path: '/product/253',
        name: 'rodent-toy4',
        component:  RodentToy4
    },
    {
        path: '/product/254',
        name: 'rodent-toy5',
        component:  RodentToy5
    },
    {
        path: '/product/255',
        name: 'rodent-toy6',
        component:  RodentToy6
    },
    {
        path: '/product/260',
        name: 'birds-food1',
        component:  BirdsFood1
    },
    {
        path: '/product/261',
        name: 'birds-food2',
        component:  BirdsFood2
    },
    {
        path: '/product/262',
        name: 'birds-food3',
        component:  BirdsFood3
    },
    {
        path: '/product/263',
        name: 'birds-food4',
        component:  BirdsFood4
    },
    {
        path: '/product/264',
        name: 'birds-food5',
        component:  BirdsFood5
    },
    {
        path: '/product/265',
        name: 'birds-food6',
        component:  BirdsFood6
    },
    {
        path: '/product/266',
        name: 'birds-food7',
        component:  BirdsFood7
    },
    {
        path: '/product/270',
        name: 'birds-feeder1',
        component:  BirdsFeeder1
    },
    {
        path: '/product/271',
        name: 'birds-feeder2',
        component:  BirdsFeeder2
    },
    {
        path: '/product/272',
        name: 'birds-feeder3',
        component:  BirdsFeeder3
    },
    {
        path: '/product/273',
        name: 'birds-feeder4',
        component:  BirdsFeeder4
    },
    {
        path: '/product/274',
        name: 'birds-feeder5',
        component:  BirdsFeeder5
    },
    {
        path: '/product/275',
        name: 'birds-feeder6',
        component:  BirdsFeeder6
    },
    {
        path: '/product/280',
        name: 'birds-cage1',
        component:  BirdsCage1
    },
    {
        path: '/product/281',
        name: 'birds-cage2',
        component:  BirdsCage2
    },
    {
        path: '/product/282',
        name: 'birds-cage3',
        component:  BirdsCage3
    },
    {
        path: '/product/283',
        name: 'birds-cage4',
        component:  BirdsCage4
    },
    {
        path: '/product/284',
        name: 'birds-cage5',
        component:  BirdsCage5
    },
    {
        path: '/product/285',
        name: 'birds-cage6',
        component:  BirdsCage6
    },
    {
        path: '/product/290',
        name: 'birds-carrying1',
        component:  BirdsCarrying1
    },
    {
        path: '/product/291',
        name: 'birds-carrying2',
        component:  BirdsCarrying2
    },
    {
        path: '/product/292',
        name: 'birds-carrying3',
        component:  BirdsCarrying3
    },
    {
        path: '/product/293',
        name: 'birds-carrying4',
        component:  BirdsCarrying4
    },
    {
        path: '/product/294',
        name: 'birds-carrying5',
        component:  BirdsCarrying5
    },
    {
        path: '/product/295',
        name: 'birds-carrying6',
        component:  BirdsCarrying6
    },
    {
        path: '/product/300',
        name: 'birds-house1',
        component:  BirdsHouse1
    },
    {
        path: '/product/301',
        name: 'birds-house2',
        component:  BirdsHouse2
    },
    {
        path: '/product/302',
        name: 'birds-house3',
        component:  BirdsHouse3
    },
    {
        path: '/product/303',
        name: 'birds-house4',
        component:  BirdsHouse4
    },
    {
        path: '/product/304',
        name: 'birds-house5',
        component:  BirdsHouse5
    },
    {
        path: '/product/305',
        name: 'birds-house6',
        component:  BirdsHouse6
    },
    {
        path: '/product/310',
        name: 'birds-toy1',
        component:  BirdsToy1
    },
    {
        path: '/product/311',
        name: 'birds-toy2',
        component:  BirdsToy2
    },
    {
        path: '/product/312',
        name: 'birds-toy3',
        component:  BirdsToy3
    },
    {
        path: '/product/313',
        name: 'birds-toy4',
        component:  BirdsToy4
    },
    {
        path: '/product/314',
        name: 'birds-toy5',
        component:  BirdsToy5
    },
    {
        path: '/product/315',
        name: 'birds-toy6',
        component:  BirdsToy6
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
