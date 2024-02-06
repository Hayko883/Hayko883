<template>
  <div>
    <div class="lg:px-[266px] text-center capitalize">
      <h2 class="text-[#2B2B2B] dark:text-white text-[32px] font-bold leading-10">Education</h2>
      <p class="text-[15px] leading-6 tracking-wide text-[#767676] mt-6">AAmet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
    </div>
    <FragmentCertificate :key="countData" :data="countData" :url="'http://127.0.0.1:8000/api/storeEducation'"/>
  </div>
</template>

<script setup>
import FragmentCertificate from "@/components/main/FragmentCertificate.vue";
import {useUserStore} from "@/store/userStore";
import {onMounted, ref} from "vue";
import axios from "axios";

const userStore = useUserStore()
const countData= ref([
  {
    dateValue: {
      startDate: "",
      endDate: "",
    },
    certificate: "",
    formatter: {
      date: "MMM YYYY",
      month: "MMM",
    },
    btnShow : true
  }
])
onMounted(async () => {
  await userStore.getUser()

  const userEducation = userStore.user.education
  if (userEducation.length) {
    userEducation.forEach(e => {
      countData.value.push({
        dateValue: {
          startDate: e.startDate,
          endDate: e.endDate,
        },
        certificate: e.certificate,
        formatter: {
          date: "MMM YYYY",
          month: "MMM",
        },
        btnShow: false
      })
    })
  }
})

</script>

<style scoped>

</style>