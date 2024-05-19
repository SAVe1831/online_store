<template>
  <div class="items-container mt-8 mb-3 bg-red-50 p-1 sm:p-5 border-round-2xl">
    <h1>Личный кабинет</h1>
    <div v-if="showLoader" class="flex justify-content-center">
        <Loader/>
    </div>
    <div class="flex flex-column gap-3 w-full align-items-center" v-else>
      <Card class="w-full" v-for="(text, i) in hello" :key="i">
        <template #title> {{ text.header }} </template>
        <template #subtitle> {{ text.paragraph }} </template>
      </Card>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import axiosApiInstance from '@/api'
import Loader from '../components/Loader.vue'
import Card from 'primevue/card'

const hello = ref();
const showLoader = ref(false);

const getData = async () => {
  showLoader.value = true;
  try {
    const response = await axiosApiInstance.get(`https://online-store-dc48c-default-rtdb.europe-west1.firebasedatabase.app/hello.json`);
    hello.value = response.data;
  } catch (err) {
    console.log(err.response);
  } finally {
    showLoader.value = false
  }
}

onMounted(async () => {
  await getData()
})
</script>