<template>
  <div class="sign-up-container mt-8 mb-3 bg-red-50 p-1 sm:p-5 border-round-2xl">
      <h1>Авторизация</h1>
      <div class="wrapper flex justify-content-center">
          <form class="container bg-yellow-50 border-1 border-round-2xl p-5">
              <Message v-if="authStore.error" severity="error">{{ authStore.error }}</message>
              <div class="form-group flex flex-column">
                  <p>Введите необходимые данные для авторизации:</p>
                  <label for="username">Электронная почта:</label>
                  <input class="mt-2 w-full" v-model="email" type="email"></input>
              </div>
              <div class="form-group  flex flex-column mt-3">
                  <label for="password">Пароль:</label>
                  <input class="mt-2 w-full" v-model="password" type="password"></input>
              </div>
              <div v-if="authStore.loader" class="flex justify-content-center">
                  <Loader/>
              </div>
              <div v-else class="flex justify-content-center">
                  <button @click="signin" class="my-5 w-full p-2 cursor-pointer bg-green-400 border-none text-white hover:bg-green-500 transition-400" type="submit">Войти</button>
              </div>               
              <p>Ещё не зарегистрированы? <router-link to="/auth-sign-up">Регистрация</router-link></p>
          </form>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import Message from 'primevue/message'
import Loader from '../components/Loader.vue'
import {useRouter} from 'vue-router'

const router = useRouter();

const authStore = useAuthStore();

const email = ref();
const password = ref();

const signin = async () => {
  await authStore.auth({email: email.value, password: password.value}, 'signin')
  router.push('/personal-area')
}
</script>

<style scoped>

button:active {
  transform:  translateY(+3%);
}
</style>