<template>
    <div @click="closeCart" class="cart-background hidden fixed top-0 left-0 w-full h-full bg-gray-900 opacity-70 z-4">
    </div>
    <div class="cart hidden bg-orange-50 w-full sm:w-8 md:w-6 lg:w-5 xl:w-4 h-full sm:border-left-3 border-orange-500 fixed top-0 right-0 z-5 p-1 lg:p-5">
        <div class="flex align-items-center gap-5">
            <svg @click="closeCart" class="ml-3 lg:m-0" version="1.0" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px"
                viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#C154C1" stroke="none">
                    <path d="M2325 4874 c-342 -49 -526 -102 -780 -224 -238 -115 -428 -252 -626
                    -449 -355 -355 -567 -767 -656 -1276 -25 -143 -25 -587 0 -730 89 -509 301
                    -921 656 -1276 356 -356 775 -571 1279 -656 153 -26 571 -26 724 0 504 85 923
                    300 1279 656 356 356 571 775 656 1279 26 153 26 571 0 724 -85 504 -300 923
                    -656 1279 -354 353 -770 568 -1271 655 -91 16 -529 29 -605 18z m172 -1060
                    c56 -42 63 -89 63 -396 l0 -268 510 0 c438 0 516 -2 548 -15 47 -20 79 -50
                    103 -97 18 -35 19 -64 19 -478 0 -414 -1 -443 -19 -478 -24 -47 -56 -77 -103
                    -97 -32 -13 -110 -15 -547 -15 l-510 0 -3 -297 c-3 -264 -5 -302 -21 -331 -24
                    -43 -72 -72 -122 -72 -39 0 -47 7 -685 645 l-645 645 635 636 c349 349 644
                    640 655 644 30 14 86 2 122 -26z" />
                </g>
            </svg>
            <h2>Корзина</h2>
        </div>
        <my-cart-item-list></my-cart-item-list>
        <div>
            <div class="my-5 flex">
                <span>Итого:</span>
                <div class="flex-1 border-bottom-1"></div>
                <b>3900 ₽</b>
            </div>
            <button class="bg-green-500 w-full p-3 border-round-2xl border-none text-white text-2xl hover:bg-green-600 active:bg-green-800 transition-duration-400 cursor-pointer">Оформить заказ</button>
        </div>
    </div>
</template>

<script setup>

const closeCart = () => {
    document.querySelector('.cart-background').classList.add('hidden');
    document.querySelector('.cart').classList.add('hidden');

}
</script>

<style scoped>
svg {
    cursor: pointer;
    opacity: .4;
    transition-duration: 300ms;
}
svg:hover {
    transform: translateX(-15%);
    opacity: 1;
}
button:hover {
    transform: translateY(-1%);
}
button:active {
    transform: translateY(+1%);
}
</style>