<template>
    <div class="discounts-container mt-8 mb-3 bg-red-50 p-1 sm:p-5 border-round-2xl">
        <h2>Обратная связь</h2>
        <form @submit.prevent.stop="submit" class="container p-5 w-full">
            <b>Ваше имя:</b><span style="color:red">*</span><br>
            <input class="mb-3 mt-1" type="text" size="30" v-model="review.author" placeholder="Как Вас зовут?"><br>
            <b>Ваш E-mail:</b><span style="color:red">*</span><br>
            <input class="mb-3 mt-1" type="email" size="30" v-model="review.email" placeholder="Введите Ваш e-mail"><br>
            <b>Телефон:</b><span style="color:red">*</span><br>
            <input class="mb-3 mt-1" type="text" v-model="review.phone" placeholder="Введите номер телефона"><br>
            <b>Текст сообщения:</b><span style="color:red">*</span><br>
            <textarea class="w-full sm:w-9 lg:w-6 max-w-6" cols="50" rows="10" v-model="review.text" placeholder="Ваше сообщение"></textarea>
            <div class="photo my-3">
                <label>Фото</label><br>
                <input type="file" @change="uploadFile"><br>
                <img :src="previewFilePath" alt="" class="w-6 sm:w-5 md:w-4 lg:w-3 xl:w-2 mt-3">
            </div>
            <div class="w-full">
                <input type="checkbox" v-model="review.isAccepted" @change="enableButton">
                <label>
                    Я выражаю 
                    <a href="#">согласие на передачу и обработку персональных данных</a> 
                    в соответствии с 
                    <a href="#">Политикой конфиденциальности</a>
                </label>
            </div>
            <button class="mt-3 active:bg-green-200" :disabled="!review.isAccepted">Отправить</button>
        </form>
    </div>
</template>


<script setup>
import { reactive, computed } from 'vue'
import axios from 'axios'


const review = reactive({
    author: '',
    email: '',
    phone: '',
    text: '',
    photo: null,
    isAccepted: false
})

const previewFilePath = computed(() => {
    if (review.photo) {
        return URL.createObjectURL(review.photo)
    }
    return '#'
})

const submit = () => {
    console.log('submit!');
    axios.post('/api/review', review, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log('Обработка завершена')
        })
}

const uploadFile = (e) => {
    const [file] = e.target.files;
    review.photo = file;
}

const enableButton = () => {
    this.review.isAccepted = !this.review.isAccepted;
  }
</script>


<style scoped></style>