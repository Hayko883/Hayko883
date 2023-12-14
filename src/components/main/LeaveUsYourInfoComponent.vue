<template>
  <div class="capitalize mt-[70px]">
    <div>
      <h2 class="text-[32px] font-bold leading-[123.6%] text-[#2B2B2B] lg:text-center sm:text-center">Leave us your info</h2>
    </div>
    <div class="bg-white dark:bg-[#242526] text-[#767676] dark:text-white leading-[123.6%] p-[25px] mt-[50px]">
      <form lang="">
        <div class="">
          <label for="full_name" class="block mb-2 text-lg font-medium ">Your Full Name ( Required)</label>
          <input type="text" id="full_name" class="bg-[#F0F0F6] dark:bg-[#18191A] border border-gray-300 text-sm focus:border-red-900 block w-full p-2.5">
        </div>
        <div class="mt-[25px]">
          <label for="email" class="block mb-2 text-lg font-medium ">Your Email ( Required)</label>
          <input type="email" id="email" class="bg-[#F0F0F6] dark:bg-[#18191A] border border-gray-300 text-sm block w-full p-2.5">
        </div>
        <div class="mt-[25px]">
          <label for="subject" class="block mb-2 text-lg font-medium ">Subject</label>
          <input type="text" id="subject" class="bg-[#F0F0F6] dark:bg-[#18191A] border border-gray-300 text-sm block w-full p-2.5">
        </div>
        <div class="mt-[25px]">
          <label for="massage" class="block mb-2 text-lg font-medium ">Your Message</label>
          <textarea type="text" id="massage" rows="10" cols="58" class="bg-[#F0F0F6] dark:bg-[#18191A] py-1 px-[11.5px] border border-gray-300 text-sm block w-full"></textarea>
        </div>
        <button type="submit" class="bg-[#FFB400] uppercase p-[9px_24px_9px_25px] mt-[25px] text-[#2B2B2B]">send message</button>
      </form>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>