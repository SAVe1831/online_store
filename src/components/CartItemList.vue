<template>
  <div class="flex flex-column gap-2">
      <my-cart-item
      v-for="item in cart"
      :key="item.id"
      :image-url="item.image"
      :description="item.description"
      :price="item.price"
      :is-added="item.isAdded"
      @on-click-remove="() => removeFromCart(item)"
      ></my-cart-item>
  </div>
  
</template>


<script setup>
import { inject } from 'vue'

const { cart } = inject('cart')

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  const storedCart = JSON.parse(localStorage.getItem('cart'));
  const index = storedCart.findIndex(cartItem => cartItem.id === item.id);
  if (index !== -1) {
    storedCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(storedCart));
    cart.value = storedCart;
  }
  item.isAdded = false;
}
</script>