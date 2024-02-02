<template>
  <div class="capitalize">
    <div class="lg:px-[266px] text-center ">
      <h2 class="text-[#2B2B2B] dark:text-white text-[32px] font-bold leading-10">Portfolio</h2>
      <p class="text-[15px] leading-6 tracking-wide text-[#767676] mt-6">Amet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
    </div>
    <div class="mt-[50px]">
      <ul class="flex gap-x-9 justify-center text-[#2B2B2B] dark:text-white text-[18px] font-medium leading-[123.6%]">
        <li class="text-[#FFB400]">All categories</li>
        <li>UI Design</li>
        <li>Web Templates</li>
        <li>Logo</li>
        <li>Branding</li>
      </ul>
    </div>
    <div  class="mt-[50px] flex gap-y-5 xl:justify-between lg:justify-around md:justify-around flex-wrap">
      <div v-for="(image, index) in images" :key="index" @click="handleImageClick(index)" class="relative">
        <div v-if="selectedImage === index"  class="bg-[#ffb400] absolute w-full h-full  items-center flex justify-center opacity-95">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2_913)">
              <path
                  d="M23.8335 23.8334V10.8334H28.1668V23.8334H41.1668V28.1667H28.1668V41.1667H23.8335V28.1667H10.8335V23.8334H23.8335Z"
                  fill="#2B2B2B"/>
            </g>
            <defs>
              <clipPath id="clip0_2_913">
                <rect width="52" height="52" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <img class="xl:w-full lg:w-full md:w-fit" :src=image.fileName :alt=image.alt>
      </div>

    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const images = [
  { fileName: require("@/assets/icons/image(1).png"), alt: "Image 1" },
  { fileName: require("@/assets/icons/image.png"), alt: "Image 2" },
  { fileName: require("@/assets/icons/image(2).png"), alt: "Image 3" },
  { fileName: require("@/assets/icons/image(3).png"), alt: "Image 4" },
  { fileName: require("@/assets/icons/image(4).png"), alt: "Image 5" },
  { fileName: require("@/assets/icons/image(5).png"), alt: "Image 6" },
  { fileName: require("@/assets/icons/image(6).png"), alt: "Image 7" },
  { fileName: require("@/assets/icons/image(7).png"), alt: "Image 8" },
  { fileName: require("@/assets/icons/image(8).png"), alt: "Image 9" },
]
const selectedImage = ref(0);

const handleImageClick = (index) => {
  selectedImage.value = index;
};

</script>

<style scoped>

</style>