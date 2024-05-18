<template>
  <div>
      <div class="flex flex-column sm:flex-row pb-4 justify-content-end">
          <select @change="onChangeSelect($event)" class="h-2rem w-15rem px-2 border-none border-round-xl">
              <option value="titleLong">По алфавиту</option>
              <option value="price">По цене(возрастание)</option>
              <option value="-price">По цене(убывание)</option>
          </select>
          <div class="relative sm:ml-5 mt-3 sm:mt-0">
              <img class="absolute" style="width: 24px;" src="/images/search.png">
              <input @input="onChangeSearch($event)" class="h-2rem w-15rem pl-5 pr-1 border-none border-round-xl"
                  type="text" placeholder="Поиск...">
          </div>
      </div>
      <div class="card-container flex flex-wrap justify-content-around gap-3" v-auto-animate>
          <my-card-item 
              v-for="item in items" 
              :key="item.id" 
              :id="item.id"
              :image-url="item.image" 
              :titleLong="item.titleLong" 
              :price="item.price"
              :is-favorite="item.isFavorite" 
              :on-click-favorite="() => addToFavorites(item)"
              :is-added="item.isAdded" 
              :on-click-add="() => addToCart(item)"
              :on-click-route="() => routeToProduct(item.id)"
          ></my-card-item>
      </div>
  </div>
</template>


<script setup>
import { onMounted, ref, watch, reactive, inject } from 'vue'
import axiosApiInstance from '../api'
import debounce from 'lodash.debounce'
import { useRouter } from 'vue-router'

const router = useRouter();

const props = defineProps({
  items: Array,
  apiUrl: String,
  idMin: Number,
  idMax: Number
})

const emit = defineEmits(['addToCart'])

const items = ref([]);

const filters = reactive({
  sortBy: 'titleLong',
  searchQuery: ''
});

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

const onChangeSearch = debounce((event) => {
filters.searchQuery = event.target.value
}, 500)

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
        item
      }

      item.isFavorite = true

      const { data } = await axiosApiInstance.post(`https://106b03ab3546a2ba.mokky.dev/favorites`, obj)

      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await axiosApiInstance.delete(`https://106b03ab3546a2ba.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (err) {
    console.log(err)
  }
}

const fetchFavorites = async () => {
try {
  const { data: favorites } = await axiosApiInstance.get(`https://106b03ab3546a2ba.mokky.dev/favorites`)

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
          params.titleLong = `*${filters.searchQuery}*`
      }

      await axiosApiInstance.get(props.apiUrl, {params}).then(response => {
        items.value = response.data.filter(item => item.id >= props.idMin && item.id <= props.idMax).map((obj) => ({
          ...obj,

          favoriteId: null,
          isAdded: false
        }))
      })
  } catch (err) {
      console.log(err);
  }
}

const routeToProduct = (id) => {
  router.push(`/product/${id}`)
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