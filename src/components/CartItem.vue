<template>
    <div class="flex flex-nowrap justify-content-between border-1 border-gray-300 border-round-2xl p-1 lg:p-2 w-full h-7rem">
        <div class="w-4 flex justify-content-center">
            <img alt="product photo" :src="imageUrl" class="h-full w-auto" />
        </div>
        <div class="w-9 flex flex-column justify-content-between ml-2">
            <p class="w-full m-0 h-4rem overflow-hidden text-xs lg:text-base">{{ description }}</p>
            <div class="flex justify-content-between align-items-center">
                <b>{{ price }} ₽</b>
                <div class="btn flex justify-content-center">
                    <Button @click="emit('onClickRemove')" label="Удалить" class="bg-red-400 border-none text-color hover:bg-red-600 transition-400" />
                </div>
            </div>
        </div>
    </div>    
</template>


<script setup>
const emit = defineEmits(['onClickRemove'])

const props = defineProps({
    id: Number,
    imageUrl: String,
    description: String,
    price: Number,
    isAdded: Boolean,
    onClickRemove: Function

})


</script>

<style scoped>
Button:hover {
    transform: translateX(-2%) translateY(-2%);
}
Button:active {
    transform: translateX(+2%) translateY(+2%);
}
</style>