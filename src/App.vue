<template>
  <my-drawer v-if="drawerOpen" :close-drawer="closeDrawer"></my-drawer>
  <Navbar :open-drawer="openDrawer" :total-price="totalPrice"></Navbar>
  <div class="app">
      <router-view></router-view>
  </div>
  <my-footer></my-footer>
  <ScrollTop />
</template>


<script setup>
import { ref, provide, computed } from 'vue';


const cart = ref([]);

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))

const drawerOpen = ref(false);

const openDrawer = () => {
  drawerOpen.value = true;
}

const closeDrawer = () => {
  drawerOpen.value = false;
}





provide('cart', {
  cart,
  totalPrice
})



</script>


<style>
html {
  height: 100%;
}
body {
  background-color: rgb(244, 234, 234);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>