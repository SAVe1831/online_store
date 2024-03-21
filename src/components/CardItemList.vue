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
            <my-card-item v-for="item in items" :key="item.id" :is-favorite="false" :onClickFavorite="onClickFavorite"
                :title="item.title" :description="item.description" :image-url="item.image" :price="item.price"
                :is-added="false" :onClickAdd="onClickAdd"></my-card-item>
        </div>
    </div>
</template>


<script setup>
import { onMounted, ref, watch, reactive } from 'vue'
import axios from 'axios'

const props = defineProps({
    items: Array,
    apiUrl: String
})

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
        items.value = data;
    } catch (err) {
        console.log(err);
    }
}

onMounted(fetchItems)
watch(filters, fetchItems)

    


const onClickFavorite = () => {
    alert('Добавить в избранное')
}

const onClickAdd = () => {
    alert('Добавить в корзину!')
}
</script>


<style scoped>
img {
    top: 4px;
    left: 4px;
}
</style>