<template>
    <div class="bestsellers-container my-3 bg-red-100 p-1 sm:p-5 flex flex-wrap justify-content-center border-round-2xl">
        <h2 class="m-0 text-center hidden md:block">Хиты продаж</h2>
        <button class="text-2xl bg-red-100 border-round-2xl p-2 font-bold md:hidden mt-2 sm:mt-0" @click="toggleCards">Хиты продаж</button>
        <div v-if="showCards" class="card-container mt-3 flex flex-wrap justify-content-center">
            <Card class="overflow-hidden ml-0 mt-3 max-w-full h-auto sm:w-5 sm:ml-3 lg:w-18rem shadow-6 hover:shadow-8 transition-duration-300">
                <template #header>
                    <img alt="product photo" src="/images/card-darling.jpg" class="max-w-full max-h-full"/>
                </template>
                <template #title>Purina Darling</template>
                <template #subtitle>Категория: Для кошек/сухой корм</template>
                <template #content>
                    <p class="m-0 p-0">Сухой корм для кошек с мясом по-домашнему и овощами. Содержит все необходимые витамины и минеральные вещества</p>
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
            <Card class="overflow-hidden ml-0 mt-3 w-full h-auto sm:w-5 sm:ml-3 lg:w-18rem shadow-6 hover:shadow-8 transition-duration-300">
                <template #header>
                    <img alt="product photo" src="/images/card-dreamies.png" class="max-w-full max-h-full" />
                </template>
                <template #title>Dreamies</template>
                <template #subtitle>Категория: Для кошек/сухой корм</template>
                <template #content>
                    <p class="m-0 p-0">Лакомство для кошек Dreamies Лакомые подушечки с сыром. Угощение приносит не только радость, но и пользу.</p>
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
            <Card class="overflow-hidden ml-0 mt-3 max-w-full h-auto sm:w-5 sm:ml-3 lg:w-18rem shadow-6 hover:shadow-8 transition-duration-300">
                <template #header>
                    <img alt="product photo" src="/images/rat-food.jpg" class="max-w-full max-h-full"/>
                </template>
                <template #title>Little ONE</template>
                <template #subtitle>Категория: Для грызунов/корм</template>
                <template #content>
                    <p class="m-0 p-0">Полнорационный корм для крыс. Сбалансированный состав, благоприятно влияющий на их здоровье и долголетие.</p>
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
            <Card class="overflow-hidden ml-0 mt-3 w-full h-auto sm:w-5 sm:ml-3 lg:w-18rem shadow-6 hover:shadow-8 transition-duration-300">
                <template #header>
                    <img alt="product photo" src="/images/bird-food.jpg" class="max-w-full max-h-full" />
                </template>
                <template #title>Rio Exotic Birds</template>
                <template #subtitle>Категория: Для птиц/корм</template>
                <template #content>
                    <p class="m-0 p-0">Основной рацион. Зерновая смесь для ежедневного кормления амадин, астрильдов и других видов ткачиков</p>
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
            <Card class="overflow-hidden ml-0 mt-3 max-w-full h-auto sm:w-5 sm:ml-3 lg:w-18rem shadow-6 hover:shadow-8 transition-duration-300">
                <template #header>
                    <img alt="product photo" src="/images/cell.jpg" class="max-w-full max-h-full"/>
                </template>
                <template #title>Ferplast Karat 80</template>
                <template #subtitle>Категория: Для грызунов/клетки</template>
                <template #content>
                    <p class="m-0 p-0">Стеклянная клетка для хомяков. Верхняя часть - металлическая решетка. В комплекте домик для сна, миска, поилка и колесо.</p>
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
            <Card class="overflow-hidden ml-0 mt-3 max-w-full h-auto sm:w-5 sm:ml-3 lg:w-18rem shadow-6 hover:shadow-8 transition-duration-300">
                <template #header>
                    <img alt="product photo" src="/images/dog-collar.jpeg" class="max-w-full max-h-full"/>
                </template>
                <template #title>Before The Times</template>
                <template #subtitle>Категория: Для собак/ошейники</template>
                <template #content>
                    <p class="m-0 p-0">Кожаный ошейник Before The Times для собак крупных пород. Размеры: Длина: 630 мм; Ширина: 35 мм.</p>
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
        </div>
    </div>
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
.p-card-header {
    height: 200px;
    display: flex;
    justify-content: center;
    padding: 10px;
}
.p-card-body {
    padding: 10px;
}
</style>