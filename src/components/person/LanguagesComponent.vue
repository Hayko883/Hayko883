<template>
  <div class="mt-6 capitalize">
    <router-link to="/user/LanguageTest"><h4
        class="text-[#2B2B2B] text-[18px] mb-[15px] font-medium leading-6 dark:text-white">Languages</h4></router-link>
    <div v-for="language in languages" :key="language.id" class="pb-6">
      <div class="flex justify-between text-[#767676] text-[15px] leading-6 capitalize">
        <p>{{ language?.name || "Html"}}</p>
        <p>{{ language?.pivot.percent || "100"}}%</p>
      </div>
      <div class="w-full mt-[5px] p-[1px] rounded-[5px] border-[1px] border-[#FFB400] border-solid">
        <div class="bg-[#FFB400] h-1 rounded-full" :style="{width: language.pivot.percent + '%'}"></div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script setup>
import {useUserStore} from "@/store/userStore";
import {computed} from "vue";

const userStore = useUserStore()
const languages = computed(() => userStore.user.language)
console.log(languages,'asasasas')
</script>

<style scoped>

</style>