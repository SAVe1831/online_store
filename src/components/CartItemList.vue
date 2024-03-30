<template>
    <div class="flex flex-column gap-2">
        <my-cart-item
        v-for="item in cart"
        :key="item.id"
        :image-url="item.image"
        :description="item.description"
        :price="item.price"
        @on-click-remove="() => removeFromCart(item)"
        ></my-cart-item>
    </div>
    
</template>


<script setup>
import { inject } from 'vue'

const { cart, removeFromCart } = inject('cart')
</script>