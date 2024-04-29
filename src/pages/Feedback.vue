<template>
    <div class="feedback-container mt-8 mb-3 bg-red-50 p-1 sm:p-5 border-round-2xl">
        <h1>Обратная связь</h1>
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
                <b>Фото</b><br>
                <input type="file" @change="uploadFile"><br>
                <img :src="previewFilePath" alt="" class="w-6 sm:w-5 md:w-4 lg:w-3 xl:w-2 mt-3">
            </div>
            <div class="w-full">
                <input type="checkbox" v-model="review.isAccepted">
                <label>
                    Я выражаю 
                    <router-link to="/agreement">согласие на передачу и обработку персональных данных</router-link>
                    в соответствии с 
                    <router-link to="/privacy-policy">Политикой конфиденциальности</router-link>
                </label>
            </div>
            <div>
                <Toast class="w-full sm:w-7 md:w-5 lg:w-3 right-0" />
                <button class="mt-3 active:bg-green-200" label="showMessage" @click="showMessage()" :disabled="!review.isAccepted">Отправить</button>
            </div>
        </form>
    </div>
</template>


<script setup>
import { reactive, computed } from 'vue'
import axiosApiInstance from '@/api'
import { useToast } from "primevue/usetoast"

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
    axiosApiInstance.post('/api/review', review, {
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
            console.log('Обработка завершена');
            review.author = '';
            review.email = '';
            review.phone = '';
            review.text = '';
            review.photo = null;
            review.isAccepted = false;
        })
}

const uploadFile = (e) => {
    const [file] = e.target.files;
    review.photo = file;
}

const toast = useToast();

const showMessage = () => {
    toast.add({ severity: 'success', summary: 'Ваше письмо отправлено',  life: 3000 });
};
</script>


<style scoped></style>