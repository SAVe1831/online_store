<template>
    <div class="footer-container flex flex-wrap justify-content-between mt-auto mb-3 p-3 bg-gray-300 border-round-2xl w-full">
        <div class="left-block w-full sm:w-6 lg:w-4 pt-3 pr-4">
            <div class="footer-info">
                <div class="footer-sitename"><strong>ZooМаг</strong></div>
                <div class="footer-sitecopy">© 2018 - 2024</div><br>
                <router-link to="/privacy-policy">Политика конфиденциальности</router-link>
                <div class="social-block mt-4">
                    <a class="social" href="https://vk.com">
                        <img src="/images/social/vk.png" alt="vkontakte" width="34px">
                    </a>
                    <a class="social" href="https://ok.ru/">
                        <img src="/images/social/ok.png" alt="odnoklassniki" width="34px">
                    </a>
                    <a class="social" href="https://web.telegram.org/k/">
                        <img src="/images/social/telegram.png" alt="telegram" width="34px">
                    </a>
                </div>
            </div>
        </div>
        <div class="middle-block w-full sm:w-6 lg:w-4 pt-3 pr-4">
            <div class="footer-contacts">
                <div class="footer-contacts_phone">
                    <a class="no-underline hover:underline text-color" href="tel:+79998887766">Тел +7(999)888-77-66</a>
                </div>
                <div class="footer-contacts__address mt-3">Офис: г. Краснодар, ул. Красных Партизан, 137</div>
                <div class="footer-time mt-3">Пн-Сб с 9:00 до 20:00. Воскресенье - выходной</div>
            </div>
        </div>
        <div class="right-block w-full sm:w-6 lg:w-4 pt-3">
            <ul class="menu-bottom m-0 p-0">
                <li class="menu-bottom_item">
                    <router-link class="no-underline hover:underline text-color" to="/requisites">Реквизиты</router-link>
                </li>
                <li class="menu-bottom_item">
                    <router-link class="no-underline hover:underline text-color" to="/discounts">Скидки</router-link>
                </li> 
                <li class="menu-bottom_item">
                    <router-link class="no-underline hover:underline text-color" to="/delivery">Доставка</router-link>
                </li> 
                <li class="menu-bottom_item">
                    <router-link class="no-underline hover:underline text-color" to="/exchange-return">Обмен и возврат</router-link>
                </li> 
                <li class="menu-bottom_item">
                    <router-link class="no-underline hover:underline text-color" to="/partners">Наши партнеры</router-link>
                </li> 
                <li class="menu-bottom_item">
                    <router-link class="no-underline hover:underline text-color" to="/about">О компании</router-link>
                </li> 
            </ul>
        </div>
    </div>
</template>


<script setup>

</script>


<style scoped>
    
</style>