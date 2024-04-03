<template>
    <div>
        <div class="flex flex-column sm:flex-row pb-4 justify-content-end">
            <select @change="onChangeSelect($event)" class="h-2rem w-15rem px-2 border-none border-round-xl">
                <option value="description">По алфавиту</option>
                <option value="price">По цене(возрастание)</option>
                <option value="-price">По цене(убывание)</option>
            </select>
            <div class="relative sm:ml-5 mt-3 sm:mt-0">
                <img class="absolute" style="width: 24px;" src="/images/search.png">
                <input @change="onChangeSearch($event)" class="h-2rem w-15rem pl-5 pr-1 border-none border-round-xl"
                    type="text" placeholder="Поиск...">
            </div>
        </div>
        <div class="card-container flex flex-wrap justify-content-around gap-3" v-auto-animate>
            <my-card-item 
                v-for="item in items" 
                :key="item.item.id" 
                :id="item.item.id"
                :image-url="item.item.image" 
                :description="item.item.description" 
                :price="item.item.price"
                :is-favorite="item.item.isFavorite" 
                :on-click-favorite="() => addToFavorites(item.item)"
                :is-added="item.item.isAdded" 
                :on-click-add="() => addToCart(item.item)"
            ></my-card-item>
        </div>
    </div>
</template>


<script setup>
import { onMounted, ref, watch, reactive, inject } from 'vue'
import axios from 'axios'

const props = defineProps({
    items: Array,
    apiUrl: String
})

const emit = defineEmits(['addToCart'])

const items = ref([]);

const filters = reactive({
    sortBy: 'description',
    searchQuery: ''
});

const onChangeSelect = (event) => {
    filters.sortBy = event.target.value
}

const onChangeSearch = (event) => {
    filters.searchQuery = event.target.value
}

const { cart } = inject('cart');

const addToCart = (item) => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

  const index = storedCart.findIndex(cartItem => cartItem.id === item.id);

  if (index === -1) {
    storedCart.push(item);
    item.isAdded = true;
    localStorage.setItem('cart', JSON.stringify(storedCart));
    cart.value = storedCart;
  } else {
    storedCart.splice(index, 1);
    item.isAdded = false; 

    localStorage.setItem('cart', JSON.stringify(storedCart));
    cart.value = storedCart;
  }
}

const addToFavorites = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        item_id: item.id,
        item
      }

      item.isFavorite = true

      const { data } = await axios.post(`https://0e157e836a1fe779.mokky.dev/favorites`, obj)

      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await axios.delete(`https://0e157e836a1fe779.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (err) {
    console.log(err)
  }
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`https://0e157e836a1fe779.mokky.dev/favorites`)

    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.item_id === item.id)

      if (!favorite) {
        return item
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
  } catch (err) {
    console.log(err)
  }
}

const fetchItems = async () => {
    try {
        const params = {
            sortBy: filters.sortBy
        }
        if (filters.searchQuery) {
            params.description = `*${filters.searchQuery}*`
        }

        const { data } = await axios.get(props.apiUrl, {
            params
        })
        items.value = data.map((obj) => ({
            ...obj,
            isFavorite: false,
            favoriteId: null,
            isAdded: false
        }))
    } catch (err) {
        console.log(err);
    }
}

onMounted(async () => {
  const localCart = localStorage.getItem('cart');
  cart.value = localCart ? JSON.parse(localCart) : []

  await fetchItems();
  await fetchFavorites();

  

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id)
  }))
})
watch(filters, fetchItems)

</script>


<style scoped>
img {
    top: 4px;
    left: 4px;
}
</style>