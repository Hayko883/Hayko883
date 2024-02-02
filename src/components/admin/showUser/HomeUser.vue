<template>
  <div class="flex">
    <PersonComponent class="xl:w-[21.18%] lg:w-[25%] md:w-[25.18%] sm:w-[21.18%] "/>
    <MainComponent class="w-[67.36%]"/>
    <RightMenuComponent class="w-[7.5%]"/>
  </div>
</template>

<script setup>
import PersonComponent from "@/components/PersonComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import RightMenuComponent from "@/components/RightMenuComponent.vue";
import {onMounted} from "vue";
import {useUserStore} from "@/store/userStore";
import {useAdminStore} from "@/store/adminStore";
import {useRoute} from "vue-router";

const userStore = useUserStore()
const route = useRoute()
onMounted(() => {
  userStore.getUserId(route.params.id)
})
</script>

<style scoped>

</style>