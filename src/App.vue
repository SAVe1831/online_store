<template>
  <my-drawer></my-drawer>
  <Navbar></Navbar>
  <div class="app">
      <router-view></router-view>
  </div>

  

  <my-footer></my-footer>
  <ScrollTop />
</template>


<script setup>

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
