<template>
  <div class="mt-6 ">
    <div  class="flex justify-between border-b text-[#2B2B2B] xl:text-[15px] lg:text-[12px] md:text-[12px]">
      <ul class="">
        <li ><span class="bg-[#FFB400] p-[1px_4px_1px_5px]">Age:</span></li>
        <li ><span class="bg-[#FFB400] p-[1px_4px_1px_5px]">Residence:</span></li>
        <li ><span class="bg-[#FFB400] p-[1px_4px_1px_5px]">Freelance:</span></li>
        <li ><span class="bg-[#FFB400] p-[1px_4px_1px_5px]">Address:</span></li>
      </ul>
      <ul  class="grid xl:text-right lg:text-left mb-6 xl:text-[15px] lg:text-[12px] md:text-[12px] md:visible dark:text-white invisible xl:visible lg:visible ">
        <li><span class=" ">{{user?.age}}</span></li>
        <li><span class="">{{user?.residence || "DB"}}</span></li>
        <li><span  class="text-[#7EB942]">{{ user?.freelance || "Available"}}</span></li>
        <li><span class="">{{user?.address}}</span></li>
      </ul>
    </div>
  </div>
</template>

<script setup>

import {useUserStore} from "@/store/userStore";
import {computed} from "vue";

const userStore = useUserStore();
const user = computed(() => {
  return userStore.user
})
// export default {
//   data(){
//     return {
//       user: []
//     }
//   },
//   created() {
//     this.getUser()
//   },
//   methods: {
//     async getUser() {
//         await axios.get('http://127.0.0.1:8000/api/').then(response =>{
//         const data = response.data.data;
//         this.user = data
//           console.log(data);
//       }).
//       catch (error=> {
//         console.log('error', error);
//       });
//     }
//   }
// }

</script>

<style scoped>

</style>