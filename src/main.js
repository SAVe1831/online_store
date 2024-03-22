import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/main.css'


import PrimeVue from 'primevue/config'
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
import CascadeSelect from 'primevue/cascadeselect'
import CartItem from '@/components/CartItem.vue'
import CartItemList from '@/components/CartItemList.vue'
import CardItem from '@/components/CardItem.vue'
import CardItemList from '@/components/CardItemList.vue'
import ProductDetails from '@/components/ProductDetails.vue'






import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'


const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.use(ToastService);

app.component('Navbar', Navbar);
app.component('my-drawer', Drawer);
app.component('my-cart-item', CartItem);
app.component('my-cart-item-list', CartItemList);
app.component('my-card-item', CardItem);
app.component('my-card-item-list', CardItemList);
app.component('my-product-details', ProductDetails);




app.component('Button', Button);
app.component('my-slider', Slider);
app.component('my-tree', Tree);
app.component('my-bestsellers', Bestsellers);
app.component('Card', Card);
app.component('my-brands', Brands);
app.component('my-footer', Footer);
app.component('ScrollTop', ScrollTop);
app.component('Toast', Toast);
app.component('CascadeSelect', CascadeSelect);







app.mount('#app')
