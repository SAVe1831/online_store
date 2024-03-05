<template>
   <div>
        <Tree :value="nodes" selectionMode="single" @node-select="handleNodeSelect" class="catalog absolute w-11 sm:w-6 lg:w-3 bg-orange-100 uppercase border-round-3xl border-2 border-red-300 z-5" style="top: 168px;"></Tree>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Tree from 'primevue/tree'
import { useRouter } from 'vue-router'



const nodes = ref([
    {   
        key: 1,
        label: 'Каталог', 
        icon: 'fa-solid fa-book',
        children: [
            { 
                key: 11,
                label: 'Для кошек',
                icon: 'fa-solid fa-cat',
                children: [
                    {key: 110, label: 'Сухой корм'},
                    {key: 111, label: 'Влажный корм'},
                    {key: 112, label: 'Миски/Поилки'},
                    {key: 113, label: 'Лотки/Туалеты'},
                    {key: 114, label: 'Наполнители'},
                    {key: 115, label: 'Когтеточки'},
                    {key: 116, label: 'Переноски'},
                    {key: 117, label: 'Лежанки'},
                    {key: 118, label: 'Игрушки'}
                ]
            },
            { 
                key: 12, 
                label: 'Для собак',
                icon: 'fa-solid fa-dog',
                children: [
                    {key: 120, label: 'Сухой корм'},
                    {key: 121, label: 'Влажный корм'},
                    {key: 122, label: 'Миски/Поилки'},
                    {key: 123, label: 'Лотки/Туалеты'},
                    {key: 124, label: 'Аксессуары'},
                    {key: 125, label: 'Ошейники/Поводки'},
                    {key: 126, label: 'Переноски'},
                    {key: 127, label: 'Лежанки'},
                    {key: 128, label: 'Клетки/Вольеры'},
                    {key: 129, label: 'Игрушки'}
                ]
            },
            { 
                key: 13, 
                label: 'Для грызунов',
                icon: 'pi pi-prime',
                children: [
                    {key: 130, label: 'Корм'},
                    {key: 131, label: 'Кормушки/Поилки'},
                    {key: 132, label: 'Подстилки/Наполители'},
                    {key: 133, label: 'Клетки'},
                    {key: 134, label: 'Гамаки/Домики'},
                    {key: 135, label: 'Переноски'},
                    {key: 136, label: 'Игрушки'}
                ]
            },
            { 
                key: 14, 
                label: 'Для птиц',
                icon: 'fa-solid fa-crow',
                children: [
                    {key: 140, label: 'Корм'},
                    {key: 141, label: 'Кормушки/Поилки'},
                    {key: 142, label: 'Клетки'},
                    {key: 143, label: 'Переноски'},
                    {key: 144, label: 'Гнёзда/Домики'},
                    {key: 145, label: 'Игрушки'},
                ]
            }
            
        ]
    },
]);

const router = useRouter();

const handleNodeSelect = (event) => {
    const selectedNode = event.node;
    if (selectedNode.key === 110) {
        router.push('/for-cats/dry-food'); // Переход на страницу "Сухой корм"
    }
}

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