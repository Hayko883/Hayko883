<template>
  <div class="capitalize">
    <div class="lg:px-[266px] text-center">
      <h2 class="text-[#2B2B2B] dark:text-white text-[32px] font-bold leading-10">Portfolio</h2>
      <p class="text-[15px] leading-6 tracking-wide text-[#767676] mt-6">Amet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
    </div>
    <div class="mt-[50px] z-20 relative md:static">
      <div class="flex md:order-2 space-x-3 md:space-x-0 md:hidden justify-end rtl:space-x-reverse">
        <button @click="toggleMenu" type="button"
                class=" p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky" aria-expanded="false">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div :class="openMenu ? 'block' : 'hidden'" class="absolute md:static right-0 dark:bg-[#18191A] flex items-center justify-end md:justify-center md:flex w-auto md:order-1" id="navbar-sticky">
        <ul class="md:flex flex-col text-[#2B2B2B] dark:text-white text-[18px] font-medium leading-[123.6%] p-4 md:p-0 mt-4 font-medium border md:space-x-8 md:flex-row md:mt-0 md:border-0">
          <li>
            <a href=""
               class="block py-2 px-3 text-[#FFB400] rounded md:bg-transparent md:text-[#FFB400] md:p-0 md:dark:[#FFB400]">All
              categories</a>
          </li>
          <li>
            <a href=""
               class="block py-2 px-3 text-gray-900 rounded hover:bg-[#FFB400] md:hover:bg-transparent md:hover:text-[#FFB400] md:p-0 dark:text-white  dark:hover:text-white">UI
              Design</a>
          </li>
          <li>
            <a href=""
               class="block py-2 px-3 text-gray-900 rounded hover:bg-[#FFB400] md:hover:bg-transparent md:hover:text-[#FFB400] md:p-0 dark:text-white  dark:hover:text-white">Web
              Templates</a>
          </li>
          <li>
            <a href=""
               class="block py-2 px-3 text-gray-900 rounded hover:bg-[#FFB400] md:hover:bg-transparent md:hover:text-[#FFB400] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Logo</a>
          </li>
          <li>
            <a href=""
               class="block py-2 px-3 text-gray-900 rounded hover:bg-[#FFB400] md:hover:bg-transparent hover:text-[#FFB400] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Branding</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="mt-[50px] flex gap-y-5 xl:justify-between lg:justify-around md:justify-center sm:justify-center flex-wrap">
    <div v-for="(image, index) in images" :key="index" @click="handleImageClick(index)" class="relative">
      <div v-if="selectedImage === index"
           class="bg-[#ffb400] absolute w-full h-full  items-center flex justify-center opacity-80">
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
</template>

<script setup>
import {ref} from "vue";

const openMenu = ref(false)
const images = [
  {fileName: require("@/assets/icons/image(1).png"), alt: "Image 1"},
  {fileName: require("@/assets/icons/image.png"), alt: "Image 2"},
  {fileName: require("@/assets/icons/image(2).png"), alt: "Image 3"},
  {fileName: require("@/assets/icons/image(3).png"), alt: "Image 4"},
  {fileName: require("@/assets/icons/image(4).png"), alt: "Image 5"},
  {fileName: require("@/assets/icons/image(5).png"), alt: "Image 6"},
  {fileName: require("@/assets/icons/image(6).png"), alt: "Image 7"},
  {fileName: require("@/assets/icons/image(7).png"), alt: "Image 8"},
  {fileName: require("@/assets/icons/image(8).png"), alt: "Image 9"},
]
const selectedImage = ref(0);

const handleImageClick = (index) => {
  selectedImage.value = index;
};
const toggleMenu = () => {
  openMenu.value = !openMenu.value
}

</script>

<style scoped>

</style>