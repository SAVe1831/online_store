<template>
    <div class="bestsellers-container my-3 bg-red-100 px-1 py-3 lg:px-5 flex flex-wrap justify-content-center border-round-2xl">
        <h2 class="mt-0 mb-3  text-center hidden md:block">Хиты продаж</h2>
        <button class="text-2xl bg-red-100 border-round-2xl p-2 font-bold md:hidden my-2 sm:mt-0" @click="toggleCards">Хиты продаж</button>
        <div v-if="showCards" class="card-container flex flex-wrap justify-content-around gap-3">
            <my-card-item-list apiUrl="https://106b03ab3546a2ba.mokky.dev/bestsellers" :idMin="0" :idMax="2000"></my-card-item-list>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';

const showCards = ref(false);

const toggleCards = () => {
    showCards.value = !showCards.value;
}
onMounted(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
        showCards.value = true;
    }
});
</script>


<style>

</style>