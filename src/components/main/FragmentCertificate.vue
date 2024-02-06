<template>
  <div class="mt-[50px]">
    <div class="bg-white dark:bg-[#242526] dark:text-white capitalize p-[47px_29px_0px_37px]">
        <div v-for="count in props.data" :key="count.id">
          <div class="grid lg:grid-cols-3  pb-[38px]">
          <div class="">
            <h4 class="lg:text-lg font-medium sm:text-sm">University of Toronto</h4>
            <div class="mt-6 sm:flex  items-center">
              <p class="text-base sm:text-sm lg:text-lg mr-[21px]">Student</p>
              <vue-tailwind-datepicker
                  :disabled = "!count.btnShow"
                  weekdays-size="min"
                  :formatter="count.formatter"
                  v-model="count.dateValue"
                  :shortcuts = "false"
                  input-classes="text-xs bg-[#FFB400] p-1 mt-1 text-white w-36 pr-0">
              </vue-tailwind-datepicker>
            </div>
          </div>
          <div class="lg:ml-[34px] sm:mt-4 lg:mt-0 col-span-2">
            <h4 class="lg:text-lg font-medium mb-[28px] sm:text-sm">Certificate of web training</h4>
            <p v-if="!count.btnShow" class="border p-2">{{count.certificate}}</p>
            <textarea v-else-if="count.btnShow" v-model="count.certificate" type="text" id="massage" name="certificate" rows="5" cols="10" placeholder="Certificate Of Web Training" class="bg-white dark:bg-[#18191A] py-1 px-[11.5px]  border border-gray-300 text-sm block w-full"></textarea>
          </div>
          </div>
          <div class="flex justify-end">
            <button v-if="props.data.length>1" @click="remove(count)" class="p-2 bg-[#FFB400] hover:bg-yellow-400 rounded-lg text-sm">Delete</button>
          </div>
          <div class="flex justify-center">
            <button v-if="count.btnShow" @click="store(count)"
                    class="lg:w-40 sm:w-20 text-white bg-[#FFB400] hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Send
            </button>
          </div>
          <hr class="mt-[11px] mb-[11px] col-span-3">
        </div>
      <div class="flex justify-center justify-around p-1">
        <button @click="edit(1)" class="bg-[#FFB400] flex justify-center items-center text-2xl w-10 h-10 rounded-full">+</button>
        <button @click="edit(-1)" class="bg-[#FFB400] flex justify-center items-center text-2xl w-10 h-10 rounded-full">-</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import VueTailwindDatepicker from "vue-tailwind-datepicker";
import axios from "axios";

const props = defineProps(["data", "url"])

const store = async (data) => {
  try {
    const response = await axios.post(props.url,
        { dateValue: data.dateValue,
          certificate: data.certificate},
        {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}});
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
const edit = (increment) => {
  console.log(7777, props.data)
  if (increment === 1) {
    props.data.push({
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
  } else if (increment === -1 && props.data.length > 1){
    props.data.pop()
  }
};
const remove = (count) => {
  const index = props.data.indexOf(count)
  props.data.splice(index,1)
}

</script>

<style scoped>
.date_picker {
  background-color: yellow;
}
</style>