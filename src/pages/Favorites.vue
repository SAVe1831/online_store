<template>
    <div class="favorites-container mt-8 mb-3 bg-red-50 px-1 py-5 sm:px-5 border-round-2xl">
        <h1>Избранное</h1>
        <my-card-item-list apiUrl="https://106b03ab3546a2ba.mokky.dev/favorites?_relations=items" :items="favorites" is-favorites :idMin="0" :idMax="229999"></my-card-item-list>
    </div>
 </template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'


const favorites = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://106b03ab3546a2ba.mokky.dev/favorites?_relations=items?_select=item'
    )

    favorites.value = data.map((obj) => obj.item)
  } catch (err) {
    console.log(err)
  }
})
</script>


<style scoped>

</style>
