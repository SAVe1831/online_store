<template>
   <div>
        <div class="background fixed top-0 left-0 w-full h-screen z-3 hidden" @click="collapseAll"></div>
        <Tree v-model:expandedKeys="expandedKeys" :value="nodes" selectionMode="single" @click="removeHiddenClass" class="catalog absolute w-11 sm:w-6 lg:w-3 bg-orange-100 uppercase border-round-3xl border-2 border-red-300 z-4" style="top: 168px;">
            <template #url="nodes">
                <router-link class="no-underline text-color" @click="collapseAll" :to="nodes.node.path">{{ nodes.node.label }}</router-link>
            </template>
        </Tree>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Tree from 'primevue/tree'

const nodes = ref([
    {   
        key: '0',
        label: 'Каталог', 
        icon: 'fa-solid fa-book',
        children: [
            { 
                key: '0-0',
                label: 'Для кошек',
                icon: 'fa-solid fa-cat',
                children: [
                    {key: '0-0-0', label: 'Сухой корм', path: '/cats-dry-food', type: 'url'},
                    {key: '0-0-1', label: 'Влажный корм', path: '/cats-wet-food', type: 'url'},
                    {key: '0-0-2', label: 'Миски/Поилки', path: '/cats-bowls-drinkers', type: 'url'},
                    {key: '0-0-3', label: 'Лотки/Туалеты', path: '/cats-trays-toilets', type: 'url'},
                    {key: '0-0-4', label: 'Наполнители', path: '/cats-fillers', type: 'url'},
                    {key: '0-0-5', label: 'Когтеточки', path: '/cats-scratching-posts', type: 'url'},
                    {key: '0-0-6', label: 'Переноски', path: '/cats-carrying', type: 'url'},
                    {key: '0-0-7', label: 'Лежанки', path: '/cats-beds', type: 'url'},
                    {key: '0-0-8', label: 'Игрушки', path: '/cats-toys', type: 'url'}
                ]
            },
            { 
                key: '0-1', 
                label: 'Для собак',
                icon: 'fa-solid fa-dog',
                children: [
                    {key: '0-1-0', label: 'Сухой корм', path: '/dogs-dry-food', type: 'url'},
                    {key: '0-1-1', label: 'Влажный корм', path: '/dogs-wet-food', type: 'url'},
                    {key: '0-1-2', label: 'Миски/Поилки', path: '/dogs-bowls-drinkers', type: 'url'},
                    {key: '0-1-3', label: 'Лотки/Туалеты', path: '/dogs-trays-toilets', type: 'url'},
                    {key: '0-1-4', label: 'Аксессуары', path: '/dogs-accessories', type: 'url'},
                    {key: '0-1-5', label: 'Ошейники/Поводки', path: '/dogs-collars-leashes', type: 'url'},
                    {key: '0-1-6', label: 'Переноски', path: '/dogs-carrying', type: 'url'},
                    {key: '0-1-7', label: 'Лежанки', path: '/dogs-beds', type: 'url'},
                    {key: '0-1-8', label: 'Клетки/Вольеры', path: '/dogs-cages-aviaries', type: 'url'},
                    {key: '0-1-9', label: 'Игрушки', path: '/dogs-toys', type: 'url'}
                ]
            },
            { 
                key: '0-2', 
                label: 'Для грызунов',
                icon: 'pi pi-prime',
                children: [
                    {key: '0-2-0', label: 'Корм', path: '/rodents-food', type: 'url'},
                    {key: '0-2-1', label: 'Кормушки/Поилки', path: '/rodents-feeders-drinkers', type: 'url'},
                    {key: '0-2-2', label: 'Подстилки/Наполнители', path: '/rodents-litters-fillers', type: 'url'},
                    {key: '0-2-3', label: 'Клетки', path: '/rodents-cages', type: 'url'},
                    {key: '0-2-4', label: 'Гамаки/Домики', path: '/rodents-hammocks-houses', type: 'url'},
                    {key: '0-2-5', label: 'Переноски', path: '/rodents-carrying', type: 'url'},
                    {key: '0-2-6', label: 'Игрушки', path: '/rodents-toys', type: 'url'}
                ]
            },
            { 
                key: '0-3', 
                label: 'Для птиц',
                icon: 'fa-solid fa-crow',
                children: [
                    {key: '0-3-0', label: 'Корм', path: '/birds-food', type: 'url'},
                    {key: '0-3-1', label: 'Кормушки/Поилки', path: '/birds-feeders-drinkers', type: 'url'},
                    {key: '0-3-2', label: 'Клетки', path: '/birds-cages', type: 'url'},
                    {key: '0-3-3', label: 'Переноски', path: '/birds-carrying', type: 'url'},
                    {key: '0-3-4', label: 'Гнёзда/Домики', path: '/birds-nests-houses', type: 'url'},
                    {key: '0-3-5', label: 'Игрушки', path: '/birds-toys', type: 'url'},
                ]
            }
            
        ]
    },
]);

const expandedKeys = ref({});

const expandNode = (node) => {
    if (node.children && node.children.length) {
        expandedKeys.value[node.key] = true;

        for (let child of node.children) {
            expandNode(child);
        }
    }
};

const removeHiddenClass = () => {
    document.querySelector('.background').classList.remove('hidden');
};
const collapseAll = () => {
    document.querySelector('.background').classList.add('hidden');
    expandedKeys.value = {};
};

</script>

<style>
.p-treenode-content:hover {
    background-color: rgb(249, 200, 166);
}
@media (max-width: 575px) {
    .catalog {
        left: 13px;
    }
}
@media (min-width: 576px) and (max-width: 768px) {
    .catalog {
        left: 160px;
    }
} 
@media (min-width: 769px) and (max-width: 991px) {
    .catalog {
        left: 220px;
    }
} 
@media (min-width: 992px) {
    .catalog {
        right: 50px;
    }
} 
</style>