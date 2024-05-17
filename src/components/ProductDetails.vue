<template>
    <div v-if="items.length > 0" class="mt-8 mb-3 bg-red-50 p-1 sm:p-5 border-round-2xl">
        <h1>{{ items[0].title }}</h1>
        <div class="flex flex-wrap justify-content-around mt-3">
            <div class="w-full sm:w-8 md:w-5 lg:w-4 xl:w-3">
                <img :src="items[0].image" class="w-full mt-3" alt="Фото продукта">
                <p class="text-justify">{{ items[0].titleLong }}</p>
            </div>
            <div class="description w-full lg:w-6">
                <h3>Состав</h3>
                <p class="text-justify">{{ items[0].compound }}</p>
                <h3>Описание</h3>
                <p class="text-justify">{{ items[0].description }}</p>
            </div>
        </div>
    </div>
</template>


<script setup>
import axiosApiInstance from '../api'
import { ref } from 'vue'

const items = ref([]);

const props = defineProps({
    itemId: Number
})

const fetchProduct = async () => {
  try {
        await axiosApiInstance.get(`https://106b03ab3546a2ba.mokky.dev/items`).then(response => {
        items.value = response.data.filter(item => item.id === props.itemId)
      })
  } catch (err) {
      console.log(err);
  }
}

fetchProduct();
</script>


<style scoped></style>