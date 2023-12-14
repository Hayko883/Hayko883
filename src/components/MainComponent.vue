<template>
  <div class="ml-[30px] mr-[27px]">
    <MainMenuComponent/>
    <MyServiceComponent class="mt-[138px]"/>
    <PricePlansComponent class="mt-[70px]"/>
    <RecommendationsComponent class="mt-[70px]"/>
    <EducationComponent class="mt-[70px]"/>
    <WorkHistory class="mt-[70px]"/>
    <PortfolioComponent class="mt-[70px]"/>
    <BlogComponent class="mt-[70px]"/>
    <InfoComponent />
    <MapComponent/>
    <LogosFooterComponent/>
    <FooterComponent/>
  </div>
</template>

<script setup>
import MainMenuComponent from "@/components/main/MainMenuComponent.vue";
import MyServiceComponent from "@/components/main/MyServiceComponent.vue";
import PricePlansComponent from "@/components/main/PricePlansComponent.vue";
import RecommendationsComponent from "@/components/main/RecommendationsComponent.vue";
import EducationComponent from "@/components/main/EducationComponent.vue";
import WorkHistory from "@/components/main/WorkHistory.vue";
import PortfolioComponent from "@/components/main/PortfolioComponent.vue";
import BlogComponent from "@/components/main/BlogComponent.vue";
import InfoComponent from "@/components/main/InfoComponent.vue";
import MapComponent from "@/components/main/MapComponent.vue";
import LogosFooterComponent from "@/components/main/LogosFooterComponent.vue";
import FooterComponent from "@/components/main/FooterComponent.vue";
</script>

<style scoped>

</style>