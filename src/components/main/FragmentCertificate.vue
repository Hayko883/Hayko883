<template>
  <div class="mt-[50px]">
    <div class="bg-white dark:bg-[#242526] dark:text-white capitalize p-[47px_29px_0px_37px]">
        <div v-for="count in countData" :key="count.id">
        <form @submit.prevent="() => props.countDataMethods.AddEducationOrWork(count)" action="#">
          <div class="grid lg:grid-cols-3  pb-[38px]">
          <div class="">
            <h4 class="lg:text-lg font-medium sm:text-sm">University of Toronto</h4>
            <div class="mt-6 sm:flex  items-center">
              <p class="text-base sm:text-sm lg:text-lg mr-[21px]">Student</p>
              <vue-tailwind-datepicker
                  weekdays-size="min"
                  :formatter="count.formatter"
                  :auto-apply="false"
                  v-model="count.dateValue"
                  :shortcuts = "false"
                  input-classes="text-xs bg-[#FFB400] p-1 mt-1 text-white w-45"/>
            </div>
          </div>
          <div class="lg:ml-[34px] sm:mt-4 lg:mt-0 col-span-2">
            <h4 class="lg:text-lg font-medium mb-[28px] sm:text-sm">Certificate of web training</h4>
            <textarea v-model="count.certificate" type="text" id="massage" name="certificate" rows="5" cols="10" placeholder="Certificate Of Web Training" class="bg-white dark:bg-[#18191A] py-1 px-[11.5px] text-[#767676] border border-gray-300 text-sm block w-full"></textarea>
          </div>
          </div>
          <div class="flex justify-center">
            <button v-if="count.btnShow" type="submit"
                    class="lg:w-40 sm:w-20 text-white bg-[#FFB400] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Send
            </button>
          </div>
          <hr class="mt-[11px] mb-[11px] col-span-3">
        </form>
        </div>
      <div class="flex justify-center justify-around p-1">
        <button @click="props.countDataMethods.CountData(1)"  class="bg-[#FFB400] flex justify-center items-center text-2xl w-10 h-10 rounded-full">+</button>
        <button @click="props.countDataMethods.CountData(-1)"  class="bg-[#FFB400] flex justify-center items-center text-2xl w-10 h-10 rounded-full">-</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import VueTailwindDatepicker from "vue-tailwind-datepicker";

const props = defineProps(["countData", "countDataMethods"])

</script>

<style scoped>
.date_picker {
  background-color: yellow;
}
</style>