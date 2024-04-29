<template>
  <my-drawer v-if="drawerOpen" :close-drawer="closeDrawer"></my-drawer>
  <Navbar :open-drawer="openDrawer" :total-price="totalPrice" :token="token" :logout="logout"></Navbar>
  <div class="app">
      <router-view></router-view>
  </div>
  <my-footer></my-footer>
  <ScrollTop />
</template>


<script setup>
import { ref, provide, computed } from 'vue'
import { useAuthStore } from './stores/auth'
import { useRouter } from 'vue-router';

const authStore = useAuthStore();

const router = useRouter();

const token = computed(() => authStore.userInfo.token)
const checkUser = () => {
  const tokens = JSON.parse(localStorage.getItem('userTokens'));
  if (tokens) {
    authStore.userInfo.token = tokens.token
    authStore.userInfo.refreshToken = tokens.refreshToken
    authStore.userInfo.expiresIn = tokens.expiresIn
  }
}

const logout = () => {
  authStore.logout()
  localStorage.removeItem('userTokens')
  router.push('/auth-sign-in')
}


checkUser();

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