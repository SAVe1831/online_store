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

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  const storedCart = JSON.parse(localStorage.getItem('cart'));
  const index = storedCart.findIndex(cartItem => cartItem.id === item.id);
  if (index !== -1) {
    storedCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(storedCart));
    cart.value = storedCart;
  }
  item.isAdded = false;
}

provide('cart', {
  cart,
  removeFromCart,
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
