<template>
    <div class="card-item bg-white p-3 cursor-pointer border-1 border-300 border-round-2xl hover-translate shadow-4 hover:shadow-6 transition-duration-300">
        <div class="flex relative justify-content-center w-full h-12rem mb-3">
            <img @click="onClickFavorite" :src="!isFavorite ? 'images/heart-1.png' : 'images/heart-2.png'" alt="favorite" class="absolute top-0 left-0">
            <img :src="imageUrl" alt="product" class="w-10rem">
        </div>        
        <p class="h-6rem overflow-hidden"> {{ description }}</p>
        <div class="flex justify-content-between align-items-center">
            <div class="flex flex-column">
                <span class="font-light text-xl">Цена:</span>
                <b class="text-xl">{{ price }} ₽</b>
            </div>
            <img @click="onClickAdd" class="w-3" :src="!isAdded ? 'images/plus.png' : 'images/selected.png'" alt="add">
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    id: Number,
    imageUrl: String,
    description: String,
    price: Number,
    isAdded: Boolean,
    isFavorite: Boolean,
    onClickAdd: Function,
    onClickFavorite: Function
})




</script>

<style scoped>
.hover-translate:hover {
    transform: translateY(-2px);
}
@media (min-width: 320px) {
    .card-item {
        width: 100%;
    }
}
@media (min-width: 460px) {
    .card-item {
        width: 48%;
    }
}
@media (min-width: 760px) {
    .card-item {
        width: 31%;
    }
}
@media (min-width: 1200px) {
    .card-item {
        width: 23%;
    }
}
@media (min-width: 1500px) {
    .card-item {
        width: 19%;
    }
}
</style>