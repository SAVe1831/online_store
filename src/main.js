import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Navbar from '@/components/Navbar.vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputGroup from 'primevue/inputgroup'
import Slider from '@/components/Slider.vue'
import Tree from '@/components/Tree.vue'
import Bestsellers from '@/components/Bestsellers.vue'
import Card from 'primevue/card'
import Brands from '@/components/Brands.vue'
import Footer from '@/components/Footer.vue'
import router from '@/router/index.js'
import ScrollTop from 'primevue/scrolltop'




import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'


const app = createApp(App);
app.use(PrimeVue);
app.use(router);

app.component('Navbar', Navbar);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('InputGroup', InputGroup);
app.component('my-slider', Slider);
app.component('my-tree', Tree);
app.component('my-bestsellers', Bestsellers);
app.component('Card', Card);
app.component('my-brands', Brands);
app.component('my-footer', Footer);
app.component('ScrollTop', ScrollTop);



app.mount('#app')
