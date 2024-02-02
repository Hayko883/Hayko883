<template>
  <div>
    <div class="lg:px-[266px] text-center capitalize">
      <h2 class="text-[#2B2B2B] dark:text-white text-[32px] font-bold leading-10">Work History</h2>
      <p class="text-[15px] leading-6 tracking-wide text-[#767676] mt-6">AAmet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
    </div>
    <FragmentCertificate :count-Data="countData" :count-data-methods="{ CountData, AddEducationOrWork }"/>
  </div>
</template>

<script setup>
import FragmentCertificate from "@/components/main/FragmentCertificate.vue";
import {useUserStore} from "@/store/userStore";
import {onMounted, ref} from "vue";
import axios from "axios";

const userStore = useUserStore()
const countData = ref([
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
    btnShow: true
  }
])
onMounted(async () => {
  await userStore.getUser()

  const userWork = userStore.user && userStore.user.works;
  console.log(userWork,'65656565')

  if (userWork && userWork.length > 0) {
    userWork.forEach(e => {
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

  console.log(userWork,'45454545')
})

const CountData = (increment) => {
  if (increment === 1) {
    countData.value.push({
      dateValue: {
        startDate: "",
        endDate: "",
      },
      certificate: "",
      formatter: {
        date: "MMM YYYY",
        month: "MMM",
      },
      btnShow: true
    });
  } else if (increment === -1 && countData.value.length > 1){
    countData.value.pop()
  }
};
const AddEducationOrWork = async (data) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/storeWork",
        { dateValue: data.dateValue,
          certificate: data.certificate},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped>

</style>