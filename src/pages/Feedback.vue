<template>
    <div class="discounts-container mt-8 mb-3 bg-red-50 p-1 sm:p-5 border-round-2xl">
        <h2>Обратная связь</h2>
        <form method="post">
            <b>Ваше имя:</b><span style="color:red">*</span><br>
            <input type="text" size="30" value="" name="d[0]" id="d[0]"><br><br>
            <b>Ваш E-mail:</b><span style="color:red">*</span><br>
            <input data-validator="email" type="text" size="30" maxlength="100" value="" name="d[1]" id="d[1]"><br><br> 
            <b>Телефон:</b><span style="color:red">*</span><br>
            <input data-validator="phone" type="text" size="30" maxlength="15" value="" name="d[2]" id="d[2]">
            <br><br>                
            <b>Текст:</b><span style="color:red">*</span><br>
            <textarea cols="50" rows="7" name="d[3]" id="d[3]"></textarea>
            <br><br>               
            <input type="checkbox" value="Я выражаю&nbsp; согласие на передачу и обработку персональных данных &nbsp;в соответствии с&nbsp; Политикой конфиденциальности " id="d[4]" name="d[4]">Я выражаю&nbsp;<a href="/users/agreement" onclick="window.open(this.href, '', 'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no,width=500,left=500,height=700,top=700'); return false;">согласие на передачу и обработку персональных данных</a>&nbsp;в соответствии с&nbsp;<a href="/politika-konfidencialnosti" onclick="window.open(this.href, '', 'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no,width=500,left=500,height=700,top=700'); return false;">Политикой конфиденциальности</a>
            <br><br>               
            <br clear="all"><br>
            <input type="submit" value="Отправить"><textarea name="g-recaptcha-response" style="display: none !important;"></textarea>
        </form> 
    </div>
    <div>
        <div>
            <label for="name">Имя:</label>
            <InputText id="name" v-model="name" placeholder="Введите ваше имя"></InputText>
        </div>
        <div>
            <label for="email">Электронная почта:</label>
            <InputText id="email" v-model="email" placeholder="Введите вашу электронную почту"></InputText>
        </div>
        <div>
            <button @click="sendMessage">Отправить сообщение</button>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'

const name = ref('');
const email = ref('');

const sendMessage = () => {
    const message = {
        name: name.value,
        email: email.value
    };
    console.log(message); // здесь можно добавить логику отправки сообщения на сервер или как-то обрабатывать данные
};
</script>


<style scoped>

</style>