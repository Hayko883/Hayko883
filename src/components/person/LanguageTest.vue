<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div class=" bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Please take the language test
          </h1>
          <form @submit.prevent="submitForm" class="space-y-4 md:space-y-6" action="#">
            <div v-for="language in languages" :key="language.id" class="grid grid-cols-2 items-center">
              <label :for="language.id" class="block mr-2 text-sm font-medium text-gray-900 dark:text-white">{{language.name}}</label>
              <input v-model = "percent[language.id]" type="number" :name="language.id" :id="language.id" min="0" max="100" class="pl-2 bg-gray-50 border border-gray-700 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Percent" required="">
            </div>
            <button type="submit" class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {useUserStore} from "@/store/userStore";
import router from "@/js/router";

const userStore = useUserStore();
const languages = ref([]);
const percent = ref([]);

onMounted(async ()=> {

  try {

    console.log(userStore.user,'2222')
    const response = await axios.get('http://127.0.0.1:8000/api/languages');
    console.log(response)
    languages.value = response.data.languages;
    languages.value.forEach(language => {
      percent.value[language.id] = null;
    });
    console.log(percent)
  }catch (err){
    console.error('error',err);
  }

});

const submitForm = async () => {
 try {
   let languageData = []
   Object.entries(percent.value).forEach(([key, value]) => {
     languageData.push({language_id: key, percent: value})
   });

   console.log(percent.value);

   const response = await axios.post('http://127.0.0.1:8000/api/storePercent',{percent: languageData}, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
   if (response.data.success){
     router.push({name: 'Home'})
   }
 }catch (error){
   console.error('Eroor', error);
 }
}
</script>

<style scoped>

</style>