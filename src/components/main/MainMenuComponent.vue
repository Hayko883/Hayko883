<template>
  <div class="bg-white dark:bg-[#242526] pr-[58px] pl-[60px]">
    <div class="flex justify-center">
      <div class="mt-[93px] xl:mr-[27px] md:mr-2 ">
        <p class="text-[#2B2B2B] xl:text-5xl capitalize lg:text-xl font-bold dark:text-white leading-[123%]">I’m
          {{ user?.name }} <span
              class="text-[#FFB400]"> {{ user?.profession }} </span> <span v-if="!user.profession">Developer</span></p>
        <h6 class=" mt-[18px] text-base text-[#767676] capitalize pr-[75px] tracking-wide dark:text-white">Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis.
          Natoque rutrum semper sed suspendisse nunc lectus.</h6>
        <div class="mt-6 sm:mb-6">
          <button class="flex justify-center xl:py-4 xl:px-8 items-center bg-[#FFB400] rounded gap-2.5 md:p-2">HIRE ME
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_2655)">
                <path
                    d="M10.7812 7.33312L7.20517 3.75712L8.14784 2.81445L13.3332 7.99979L8.14784 13.1851L7.20517 12.2425L10.7812 8.66645H2.6665V7.33312H10.7812Z"
                    fill="#2B2B2B"/>
              </g>
              <defs>
                <clipPath id="clip0_2_2655">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <div class="xl:visible lg:visible md:visible invisible items-center text-center m-auto">
        <img class="xl:max-w-fit lg:max-w-full md:w-auto object-cover" src="@/assets/icons/your_image.png" alt="">
      </div>

    </div>

  </div>

</template>

<script setup>
import {useUserStore} from "@/store/userStore";

const userStore = useUserStore();
import {computed} from "vue";

const user = computed(() => {
  return userStore.user
})
</script>

<style scoped>

</style>