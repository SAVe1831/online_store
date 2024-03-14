<template>
    <div class="dry-food-container mt-8 mb-3 bg-red-50 px-1 py-5 sm:px-5 border-round-2xl">
        <h1 class="mb-3">Сухой корм для кошек</h1>
        <div class="card-container flex flex-wrap justify-content-around gap-3">
            <my-card-item 
                :is-favorite="false"
                :onClickFavorite="onClickFavorite"
                title="Сухой корм для кошек с мясом по-домашнему и овощами. Содержит все необходимые витамины и минеральные вещества" 
                image-url="images/products/card-darling.jpg" 
                :price="390"
                :is-added="false" 
                :onClickAdd="onClickAdd"
            ></my-card-item>
            <my-card-item 
                title="Лакомство для кошек Dreamies Лакомые подушечки с сыром. Угощение приносит не только радость, но и пользу." 
                image-url="images/products/card-dreamies.png" 
                :price="140"
                :is-added="false"
            ></my-card-item>
            <my-card-item image-url="images/products/card-dreamies.png"></my-card-item>
            <my-card-item image-url="images/products/card-dreamies.png"></my-card-item>
            <my-card-item image-url="images/products/card-dreamies.png"></my-card-item>
            <my-card-item image-url="images/products/card-dreamies.png"></my-card-item>

        </div>
    </div>
    
</template>


<script setup>
const onClickFavorite = () => {
    alert('Добавить в избранное')
}
const onClickAdd = () => {
    alert('Добавить в корзину!')
}
</script>


<style scoped></style>