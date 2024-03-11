
<template>
    <div class="w-12 card lg:w-7">
        <Carousel :value="products" :numVisible="1" :numScroll="1" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round">
                    <div class="mb-3">
                        <div class="relative flex align-items-center justify-content-center">
                            <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-full border-round" />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import Carousel from 'primevue/carousel';
import { ref } from "vue";



const products = ref([
    {image: 'images/slider/slider-cat.jpg' },
    {image: 'images/slider/slider-dog.jpg' },
    {image: 'images/slider/slider-rat.jpg' },
    {image: 'images/slider/slider-bird.jpg' }
]);
</script>

<style scoped>

</style>
