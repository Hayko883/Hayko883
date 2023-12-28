<template>
  <div class="mt-6">
    <h4 class="text-[#2B2B2B] text-[18px] mb-[15px] font-medium leading-6 dark:text-white">Skills</h4>
    <div v-for="skill in skills" :key="skill.id" class="pb-6">
      <div class="flex justify-between text-[#767676] text-[15px] leading-6 capitalize">
        <p>{{ skill?.name }}</p>
        <p>{{ skill?.pivot.percent }}%</p>
      </div>
      <div class="w-full mt-[5px] p-[1px] rounded-[5px] border-[1px] border-[#FFB400] border-solid">
        <div class="bg-[#FFB400] h-1 rounded-full" :style="{width: skill?.pivot.percent + '%'}"></div>
      </div>
    </div>
    <hr class="mt-6">
  </div>
</template>

<script setup>
import {useUserStore} from "@/store/userStore";
import {computed} from "vue";

const userStore = useUserStore()
const skills = computed(() => userStore.user.skill)

</script>

<style scoped>

</style>