import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import '@/assets/main.css'
import { initializeApp } from "firebase/app"


import PrimeVue from 'primevue/config'
import './api.js'

import Drawer from '@/components/Drawer.vue'
import Navbar from '@/components/Navbar.vue'
import Button from 'primevue/button'
import Slider from '@/components/Slider.vue'
import Tree from '@/components/Tree.vue'
import Bestsellers from '@/components/Bestsellers.vue'
import Card from 'primevue/card'
import Brands from '@/components/Brands.vue'
import Footer from '@/components/Footer.vue'
import router from '@/router/index.js'
import ScrollTop from 'primevue/scrolltop'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import CartItem from '@/components/CartItem.vue'
import CartItemList from '@/components/CartItemList.vue'
import CardItem from '@/components/CardItem.vue'
import CardItemList from '@/components/CardItemList.vue'
import ProductDetails from '@/components/ProductDetails.vue'
import FavoriteList from '@/components/FavoriteList.vue'

import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const firebaseConfig = {
    apiKey: "AIzaSyDkAZa_4X6Rp7HC8_hzdBIvzU8SwDCrL4U",
    authDomain: "online-store-dc48c.firebaseapp.com",
    projectId: "online-store-dc48c",
    storageBucket: "online-store-dc48c.appspot.com",
    messagingSenderId: "614449526941",
    appId: "1:614449526941:web:b65f1b661a253b4bba3c74"
};

initializeApp(firebaseConfig);

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.use(ToastService);
app.use(autoAnimatePlugin);
app.use(createPinia());


app.component('Navbar', Navbar);
app.component('my-drawer', Drawer);
app.component('my-cart-item', CartItem);
app.component('my-cart-item-list', CartItemList);
app.component('my-card-item', CardItem);
app.component('my-card-item-list', CardItemList);
app.component('my-product-details', ProductDetails);
app.component('my-favorite-list', FavoriteList);


app.component('Button', Button);
app.component('my-slider', Slider);
app.component('my-tree', Tree);
app.component('my-bestsellers', Bestsellers);
app.component('Card', Card);
app.component('my-brands', Brands);
app.component('my-footer', Footer);
app.component('ScrollTop', ScrollTop);
app.component('Toast', Toast);


app.mount('#app')