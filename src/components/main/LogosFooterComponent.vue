<template>
  <div class="mt-[70px] xl:flex justify-between lg:grid lg:grid-cols-6 sm:grid sm:grid-cols-2">
    <FillingStation class="lg:col-start-2 lg:col-span-2  sm:col-span-1"/>
    <PetroleumLogo class="lg:col-start-5 lg:col-span-2 sm:col-span-1"/>
    <PetrolGarage class="lg:col-start-2 lg:col-span-2 sm:col-span-1"/>
    <Station class="lg:col-start-5 lg:col-span-2 sm:col-span-1"/>
  </div>
</template>

<script setup>
import FillingStation from "@/components/main/LogoFooter/FillingStation.vue";
import PetroleumLogo from "@/components/main/LogoFooter/PetroleumLogo.vue";
import PetrolGarage from "@/components/main/LogoFooter/PetrolGarage.vue";
import Station from "@/components/main/LogoFooter/StationLogo.vue";
</script>

<style scoped>

</style>