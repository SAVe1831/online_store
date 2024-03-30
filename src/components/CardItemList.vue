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
        <div class="card-container flex flex-wrap justify-content-around gap-3">
            <my-card-item 
                v-for="item in items" 
                :key="item.id" 
                :id="item.id"
                :image-url="item.image" 
                :description="item.description" 
                :price="item.price"
                :is-favorite="item.isFavorite" 
                :on-click-favorite="() => addToFavorites(item)"
                :is-added="item.isAdded" 
                :on-click-add="() => addToCart(item)"
            ></my-card-item>
        </div>
    </div>
</template>


<script setup>
import { onMounted, ref, watch, reactive, inject, provide } from 'vue'
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
  if (!item.isAdded) {
    cart.value.push(item);
    item.isAdded = true;
  } else {
    cart.value.splice(cart.value.indexOf(item), 1);
    item.isAdded = false;
  }
}

const addToFavorites = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        item_id: item.id
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
    await fetchItems();
    await fetchFavorites()
})
watch(filters, fetchItems)

</script>


<style scoped>
img {
    top: 4px;
    left: 4px;
}
</style>