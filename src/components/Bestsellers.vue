<template>
    <div class="bestsellers-container my-3 bg-red-100 px-1 py-3 lg:px-5 flex flex-wrap justify-content-center border-round-2xl">
        <h2 class="mt-0 mb-3  text-center hidden md:block">Хиты продаж</h2>
        <button class="text-2xl bg-red-100 border-round-2xl p-2 font-bold md:hidden my-2 sm:mt-0" @click="toggleCards">Хиты продаж</button>
        <div v-if="showCards" class="card-container flex flex-wrap justify-content-around gap-3">
            <my-card-item></my-card-item>
            <my-card-item></my-card-item>
            <my-card-item></my-card-item>
            <my-card-item></my-card-item>
            <my-card-item></my-card-item>
            <my-card-item></my-card-item>
        </div>
    </div>
            <!-- <div class="card-content h-29rem mt-6">
                <router-link class="card-link no-underline text-color" to="/cats-dry-food-purina-darling">
                    <Card class="overflow-hidden ml-0 max-w-full h-full shadow-6 hover:shadow-8 transition-duration-300">
                        <template #header>
                            <img alt="product photo" src="/images/products/card-darling.jpg" class="max-w-full max-h-full"/>
                        </template>
                        <template #title>Purina Darling</template>
                        <template #subtitle>
                            <h4 class="m-0 h-2rem">Категория: Для кошек/сухой корм</h4>
                        </template> 
                        <template #content>
                            <p class="m-0 p-0 h-6rem">Сухой корм для кошек с мясом по-домашнему и овощами. Содержит все необходимые витамины и минеральные вещества</p>
                        </template>
                        <template #footer>
                            <div class="flex gap-3 mt-1 align-items-center justify-content-between">
                                <p>Цена:</p>
                                <div class="flex flex-nowrap align-items-center">
                                    <p class="text-red-500 text-2xl m-0">390</p><i class="fa-solid fa-ruble-sign"></i>
                                </div>
                            </div>
                        </template>
                    </Card>
                </router-link>
                <div class="btn flex justify-content-center">
                    <Button label="Добавить в корзину" icon="pi pi-cart-plus" class="bg-yellow-400 border-none text-color" />
                </div>
            </div>
            <div class="card-content h-29rem mt-6">
                <router-link class="card-link no-underline text-color mt-3" to="/cats-dry-food-purina-darling">
                    <Card class="overflow-hidden ml-0 w-full h-full shadow-6 hover:shadow-8 transition-duration-300">
                        <template #header>
                            <img alt="product photo" src="/images/products/card-dreamies.png" class="max-w-full max-h-full" />
                        </template>
                        <template #title>Dreamies</template>
                        <template #subtitle>
                            <h4 class="m-0 h-2rem">Категория: Для кошек/сухой корм</h4>
                        </template>
                        <template #content>
                            <p class="m-0 p-0 h-6rem">Лакомство для кошек Dreamies Лакомые подушечки с сыром. Угощение приносит не только радость, но и пользу.</p>
                        </template>
                        <template #footer>
                            <div class="flex gap-3 mt-1 align-items-center justify-content-between">
                                <p>Цена:</p>
                                <div class="flex flex-nowrap align-items-center">
                                    <p class="text-red-500 text-2xl m-0">140</p><i class="fa-solid fa-ruble-sign"></i>
                                </div>
                            </div>
                        </template>
                    </Card>
                </router-link>
                <div class="btn flex justify-content-center">
                    <Button label="Добавить в корзину" icon="pi pi-cart-plus" class="bg-yellow-400 border-none text-color" />
                </div>
            </div>
            <div class="card-content h-29rem mt-6">
                <router-link class="card-link no-underline text-color mt-3" to="/cats-dry-food-purina-darling">
                    <Card class="overflow-hidden ml-0 w-full h-full shadow-6 hover:shadow-8 transition-duration-300">
                        <template #header>
                            <img alt="product photo" src="/images/products/card-rat-food.jpg" class="max-w-full max-h-full"/>
                        </template>
                        <template #title>Little ONE</template>
                        <template #subtitle>
                            <h4 class="m-0 h-2rem">Категория: Для грызунов/корм</h4>
                        </template>
                        <template #content>
                            <p class="m-0 p-0 h-6rem">Полнорационный корм для крыс. Сбалансированный состав, благоприятно влияющий на их здоровье и долголетие.</p>
                        </template>
                        <template #footer>
                            <div class="flex gap-3 mt-1 align-items-center justify-content-between">
                                <p>Цена:</p>
                                <div class="flex flex-nowrap align-items-center">
                                    <p class="text-red-500 text-2xl m-0">190</p><i class="fa-solid fa-ruble-sign"></i>
                                </div>
                            </div>
                        </template>
                    </Card>
                </router-link>
                <div class="btn flex justify-content-center">
                    <Button label="Добавить в корзину" icon="pi pi-cart-plus" class="bg-yellow-400 border-none text-color" />
                </div>
            </div>
            <div class="card-content h-29rem mt-6">
                <router-link class="card-link no-underline text-color mt-3" to="/cats-dry-food-purina-darling">
                    <Card class="overflow-hidden ml-0 w-full h-full shadow-6 hover:shadow-8 transition-duration-300">
                        <template #header>
                            <img alt="product photo" src="/images/products/card-bird-food.jpg" class="max-w-full max-h-full" />
                        </template>
                        <template #title>Rio Exotic Birds</template>
                        <template #subtitle>
                            <h4 class="m-0 h-2rem">Категория: Для птиц/корм</h4>
                        </template>
                        <template #content>
                            <p class="m-0 p-0 h-6rem">Основной рацион. Зерновая смесь для ежедневного кормления амадин, астрильдов и других видов ткачиков</p>
                        </template>
                        <template #footer>
                            <div class="flex gap-3 mt-1 align-items-center justify-content-between">
                                <p>Цена:</p>
                                <div class="flex flex-nowrap align-items-center">
                                    <p class="text-red-500 text-2xl m-0">290</p><i class="fa-solid fa-ruble-sign"></i>
                                </div>
                            </div>
                        </template>
                    </Card>
                </router-link>
                <div class="btn flex justify-content-center">
                    <Button label="Добавить в корзину" icon="pi pi-cart-plus" class="bg-yellow-400 border-none text-color" />
                </div>
            </div>
            <div class="card-content h-29rem mt-6">
                <router-link class="card-link no-underline text-color mt-3" to="/cats-dry-food-purina-darling">
                    <Card class="overflow-hidden ml-0 w-full h-full shadow-6 hover:shadow-8 transition-duration-300">
                        <template #header>
                            <img alt="product photo" src="/images/products/card-cage.jpg" class="max-w-full max-h-full"/>
                        </template>
                        <template #title>Ferplast Karat 80</template>
                        <template #subtitle>
                            <h4 class="m-0 h-2rem">Категория: Для грызунов/клетки</h4>
                        </template>
                        <template #content>
                            <p class="m-0 p-0 h-6rem">Стеклянная клетка для хомяков. Верхняя часть - металлическая решетка. В комплекте домик для сна, миска, поилка и колесо.</p>
                        </template>
                        <template #footer>
                            <div class="flex gap-3 mt-1 align-items-center justify-content-between">
                                <p>Цена:</p>
                                <div class="flex flex-nowrap align-items-center">
                                    <p class="text-red-500 text-2xl m-0">10 990</p><i class="fa-solid fa-ruble-sign"></i>
                                </div>
                            </div>
                        </template>
                    </Card>
                </router-link>
                <div class="btn flex justify-content-center">
                    <Button label="Добавить в корзину" icon="pi pi-cart-plus" class="bg-yellow-400 border-none text-color" />
                </div>
            </div>
            <div class="card-content h-29rem mt-6">
                <router-link class="card-link no-underline text-color mt-3" to="/cats-dry-food-purina-darling">
                    <Card class="overflow-hidden ml-0 w-full h-full shadow-6 hover:shadow-8 transition-duration-300">
                        <template #header>
                            <img alt="product photo" src="/images/products/card-dog-collar.jpeg" class="max-w-full max-h-full"/>
                        </template>
                        <template #title>Before The Times</template>
                        <template #subtitle>
                            <h4 class="m-0 h-2rem">Категория: Для собак/ошейники</h4>
                        </template>
                        <template #content>
                            <p class="m-0 p-0 h-6rem">Кожаный ошейник Before The Times для собак крупных пород. Размеры: Длина: 630 мм; Ширина: 35 мм.</p>
                        </template>
                        <template #footer>
                            <div class="flex gap-3 mt-1 align-items-center justify-content-between">
                                <p>Цена:</p>
                                <div class="flex flex-nowrap align-items-center">
                                    <p class="text-red-500 text-2xl m-0">490</p><i class="fa-solid fa-ruble-sign"></i>
                                </div>
                            </div>
                        </template>
                    </Card>
                </router-link>
                <div class="btn flex justify-content-center">
                    <Button label="Добавить в корзину" icon="pi pi-cart-plus" class="bg-yellow-400 border-none text-color" />
                </div>
            </div> -->

</template>


<script setup>
import { ref, onMounted } from 'vue';

const showCards = ref(false);

const toggleCards = () => {
    showCards.value = !showCards.value;
}
onMounted(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
        showCards.value = true;
    }
});
</script>


<style>

</style>