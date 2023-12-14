<template>
  <div>
    <div class="lg:px-[266px] text-center capitalize">
      <h2 class="text-[#2B2B2B] text-[32px] font-bold leading-10 dark:text-white">Price plans</h2>
      <p class="text-[15px] leading-6 tracking-wide text-[#767676] dark:text-white mt-6">Amet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
    </div>
    <div class="grid xl:grid-cols-3 lg:grid-cols-2 gap-5 mt-[51px] sm:grid-cols-1">
      <SilverPriceComponent/>
      <GoldPriceComponent/>
      <DimondPriceComponent/>
    </div>
  </div>
</template>


<script setup>
import SilverPriceComponent from "@/components/main/SilverPriceComponent.vue";
import GoldPriceComponent from "@/components/main/GoldPriceComponent.vue";
import DimondPriceComponent from "@/components/main/DimondPriceComponent.vue";
</script>


<style scoped>

</style>