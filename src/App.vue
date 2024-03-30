<template>
  <my-drawer v-if="drawerOpen" :close-drawer="closeDrawer" :total-price="totalPrice"></my-drawer>
  <Navbar :open-drawer="openDrawer" :total-price="totalPrice"></Navbar>
  <div class="app">
      <router-view></router-view>
  </div>
  <my-footer></my-footer>
  <ScrollTop />
</template>


<script setup>
import { ref, provide, computed } from 'vue';

const drawerOpen = ref(false);

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))

const openDrawer = () => {
  drawerOpen.value = true;
}

const closeDrawer = () => {
  drawerOpen.value = false;
}

const cart = ref([]);

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

provide('cart', {
  cart,
  removeFromCart
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
