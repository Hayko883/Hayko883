<template>
  <div class="dark:text-white">
    <div>
      <router-link to="admin/users">All Users</router-link>
    </div>
  </div>
</template>

<script setup>
import {useAdminStore} from "@/store/adminStore";
import {onMounted} from "vue";

const adminStore = useAdminStore()

</script>

<style scoped>

</style>