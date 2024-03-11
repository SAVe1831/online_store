import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/main.css'

import PrimeVue from 'primevue/config'
import Drawer from '@/components/Drawer.vue'
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
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import CascadeSelect from 'primevue/cascadeselect'





import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'


const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.use(ToastService);

app.component('Navbar', Navbar);
app.component('Drawer', Drawer);
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
app.component('Toast', Toast);
app.component('CascadeSelect', CascadeSelect);





app.mount('#app')
