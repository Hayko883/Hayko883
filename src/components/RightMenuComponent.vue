<template>
  <div class="bg-[#FAFAFA] px-[15px] dark:bg-[#3A3B3C] ">
    <div class="flex justify-center mt-[50px]">
      <button @click="toggleDark()">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_6707)">
            <path class="dark:fill-white"
                d="M15.5 27C8.59625 27 3 21.4037 3 14.5C3 7.59625 8.59625 2 15.5 2C22.4037 2 28 7.59625 28 14.5C28 21.4037 22.4037 27 15.5 27ZM7.16125 20.0312C7.98286 21.2605 9.06683 22.2923 10.3351 23.0523C11.6034 23.8123 13.0245 24.2816 14.4959 24.4264C15.9674 24.5712 17.4526 24.3879 18.8448 23.8897C20.2369 23.3915 21.5012 22.5908 22.5466 21.5452C23.5921 20.4997 24.3927 19.2353 24.8908 17.8432C25.3888 16.451 25.572 14.9657 25.4271 13.4943C25.2822 12.0228 24.8127 10.6018 24.0526 9.3336C23.2925 8.06538 22.2606 6.98149 21.0312 6.16C21.5702 8.08278 21.5875 10.1144 21.0814 12.0461C20.5752 13.9778 19.5639 15.7398 18.1513 17.1513C16.74 18.5637 14.9781 19.5749 13.0467 20.081C11.1152 20.5872 9.08385 20.57 7.16125 20.0312Z"
                fill="#2B2B2B"/>
          </g>
          <defs>
            <clipPath id="clip0_2_6707">
              <rect width="30" height="30" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
    <div class="mt-[180px] flex justify-center flex-wrap">
      <div class="group mt-2">
        <div class="bg-black p-[6px_16px_8px_15px] text-xs capitalize relative mb-2 text-white opacity-0 group-hover:opacity-100">
          <span>home</span>
          <div class="w-3 h-3 absolute m-[-2] bg-black rotate-45 left-1/2 translate-x-[-50%]" >
          </div>
        </div>
        <div class="flex justify-center ">
          <a href="#" class="bg-[#FFB400] flex justify-center items-center w-10 h-10 rounded-full">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_6685)">
                <path
                    d="M15 14.9999C15 15.1989 14.921 15.3896 14.7803 15.5303C14.6397 15.6709 14.4489 15.7499 14.25 15.7499H3.75C3.55109 15.7499 3.36032 15.6709 3.21967 15.5303C3.07902 15.3896 3 15.1989 3 14.9999V8.24994H0.75L8.49525 1.20894C8.63333 1.0833 8.81331 1.01367 9 1.01367C9.18669 1.01367 9.36667 1.0833 9.50475 1.20894L17.25 8.24994H15V14.9999Z"
                    fill="#2B2B2B"/>
              </g>
              <defs>
                <clipPath id="clip0_2_6685">
                  <rect width="18" height="18" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
      <div class="group mt-2">
        <div class=" bg-black p-[6px_16px_8px_15px] text-xs capitalize relative mb-2 text-white opacity-0 group-hover:opacity-100">
          <span>sign up</span>
          <div class="w-3 h-3 absolute m-[-2] bg-black rotate-45 left-1/2 translate-x-[-50%]" >
          </div>
        </div>
        <div class="flex justify-center">
          <router-link to="/SignUp">
            <a href="#" class="bg-[#F0F0F6] flex justify-center items-center w-10 h-10 rounded-full">
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2_6671)">
                  <path
                      d="M16.5 4.28699V4.5H11V0H11.2603C11.5338 0 11.7962 0.0889101 11.9896 0.247113L16.198 3.69035C16.3913 3.8486 16.5 4.06321 16.5 4.28699ZM10.6562 5.625C10.0891 5.625 9.625 5.24531 9.625 4.78125V0H1.03125C0.461699 0 0 0.377754 0 0.84375V17.1562C0 17.6222 0.461699 18 1.03125 18H15.4688C16.0383 18 16.5 17.6222 16.5 17.1562V5.625H10.6562ZM5.29401 14.0803C5.27317 14.0984 5.24815 14.1131 5.22039 14.1234C5.19263 14.1337 5.16266 14.1394 5.13221 14.1402C5.10175 14.141 5.0714 14.1368 5.04289 14.1281C5.01437 14.1193 4.98826 14.106 4.96603 14.0889L2.17882 11.951C2.15567 11.9332 2.13722 11.9118 2.1246 11.888C2.11199 11.8641 2.10548 11.8384 2.10548 11.8125C2.10548 11.7865 2.11199 11.7608 2.1246 11.737C2.13722 11.7132 2.15567 11.6917 2.17882 11.674L4.96603 9.53606C4.98826 9.51901 5.01437 9.50571 5.04289 9.49691C5.0714 9.48812 5.10175 9.484 5.13221 9.48481C5.16266 9.48561 5.19263 9.49131 5.22039 9.50159C5.24815 9.51187 5.27317 9.52652 5.29401 9.54471L6.13529 10.2789C6.15655 10.2975 6.17304 10.3194 6.18377 10.3432C6.19451 10.3671 6.19927 10.3925 6.19778 10.4179C6.19629 10.4433 6.18858 10.4682 6.1751 10.4911C6.16161 10.514 6.14264 10.5345 6.11931 10.5513L4.36777 11.8125L6.11931 13.0737C6.14264 13.0905 6.16161 13.111 6.1751 13.1339C6.18858 13.1568 6.19629 13.1817 6.19778 13.2071C6.19927 13.2325 6.19451 13.2579 6.18377 13.2818C6.17304 13.3056 6.15655 13.3275 6.13529 13.3461L5.29401 14.0803ZM7.49809 15.8549L6.31847 15.5747C6.25937 15.5607 6.20951 15.528 6.17985 15.4839C6.15019 15.4398 6.14316 15.3878 6.1603 15.3394L8.8003 7.89947C8.81747 7.85112 8.85741 7.81032 8.91133 7.78606C8.96525 7.76179 9.02874 7.75603 9.08785 7.77006L10.2674 8.05025C10.2967 8.05721 10.324 8.06881 10.3478 8.08439C10.3716 8.09998 10.3914 8.11924 10.406 8.14109C10.4207 8.16294 10.43 8.18694 10.4334 8.21172C10.4367 8.2365 10.434 8.26158 10.4256 8.28552L7.78555 15.7255C7.77707 15.7494 7.76291 15.7718 7.74387 15.7913C7.72483 15.8107 7.70129 15.8269 7.6746 15.8389C7.6479 15.851 7.61857 15.8586 7.58829 15.8613C7.558 15.864 7.52735 15.8619 7.49809 15.8549ZM14.4071 11.951L11.6199 14.0889C11.5977 14.106 11.5716 14.1193 11.5431 14.1281C11.5145 14.1368 11.4842 14.141 11.4537 14.1402C11.4233 14.1394 11.3933 14.1337 11.3655 14.1234C11.3378 14.1131 11.3128 14.0984 11.2919 14.0803L10.4506 13.346C10.4293 13.3275 10.4129 13.3056 10.4021 13.2817C10.3914 13.2579 10.3866 13.2325 10.3881 13.2071C10.3896 13.1817 10.3973 13.1568 10.4108 13.1338C10.4243 13.1109 10.4433 13.0905 10.4666 13.0737L12.2182 11.8125L10.4666 10.5513C10.4433 10.5345 10.4243 10.514 10.4108 10.4911C10.3974 10.4682 10.3896 10.4433 10.3882 10.4179C10.3867 10.3925 10.3914 10.3671 10.4022 10.3432C10.4129 10.3194 10.4294 10.2975 10.4506 10.2789L11.292 9.54471C11.3128 9.52652 11.3378 9.51187 11.3656 9.50159C11.3934 9.49131 11.4233 9.48561 11.4538 9.48481C11.4842 9.484 11.5146 9.48812 11.5431 9.49691C11.5716 9.50571 11.5977 9.51901 11.62 9.53606L14.4072 11.674C14.4303 11.6917 14.4488 11.7132 14.4614 11.737C14.474 11.7608 14.4805 11.7865 14.4805 11.8125C14.4805 11.8385 14.474 11.8641 14.4613 11.888C14.4487 11.9118 14.4303 11.9332 14.4071 11.951Z"
                      fill="#767676"/>
                </g>
                <defs>
                  <clipPath id="clip0_2_6671">
                    <rect width="16.5" height="18" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </router-link>
        </div>
      </div>
     <div class="group mt-2">
       <div class="bg-black p-[6px_16px_8px_15px] text-xs capitalize relative mb-2 text-white opacity-0 group-hover:opacity-100">
         <span>sign in</span>
         <div class="w-3 h-3 absolute m-[-2] bg-black rotate-45 left-1/2 translate-x-[-50%]" >
         </div>
       </div>
       <div class="flex justify-center">
        <router-link to="/">
          <a href="#" class="bg-[#F0F0F6] flex justify-center items-center w-10 h-10 rounded-full">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_6662)">
                <path
                    d="M12.7636 11.272L9.25 14.6259L5.73638 11.272C3.10301 11.381 1 13.4376 1 15.9759V16.3134C1 17.245 1.79185 18.0009 2.76786 18.0009H15.7321C16.7081 18.0009 17.5 17.245 17.5 16.3134V15.9759C17.5 13.4376 15.397 11.381 12.7636 11.272ZM1.50089 2.80635L1.73661 2.85909V4.91221C1.47879 5.05987 1.29464 5.31651 1.29464 5.62589C1.29464 5.9212 1.46406 6.16729 1.70346 6.31846L1.12891 8.5087C1.06629 8.75128 1.20625 9.00089 1.40882 9.00089H2.94833C3.15089 9.00089 3.29085 8.75128 3.22824 8.5087L2.65368 6.31846C2.89308 6.16729 3.0625 5.9212 3.0625 5.62589C3.0625 5.31651 2.87835 5.05987 2.62054 4.91221V3.06299L5.05134 3.62198C4.7346 4.22667 4.53571 4.90167 4.53571 5.62589C4.53571 8.11143 6.64609 10.1259 9.25 10.1259C11.8539 10.1259 13.9643 8.11143 13.9643 5.62589C13.9643 4.90167 13.7691 4.22667 13.4487 3.62198L16.9954 2.80635C17.6657 2.65166 17.6657 1.85362 16.9954 1.69893L9.98292 0.0817384C9.50413 -0.0272461 8.99955 -0.0272461 8.52076 0.0817384L1.50089 1.69541C0.834263 1.8501 0.834263 2.65166 1.50089 2.80635Z"
                    fill="#767676"/>
              </g>
              <defs>
                <clipPath id="clip0_2_6662">
                  <rect width="18" height="18" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </a>
        </router-link>
       </div>
     </div>
     <div class="group mt-2">
       <div class="bg-black p-[6px_16px_8px_15px] text-xs capitalize relative mb-2 text-white opacity-0 group-hover:opacity-100">
         <span>LogOut</span>
         <div class="w-3 h-3 absolute m-[-2] bg-black rotate-45 left-1/2 translate-x-[-50%]" >
         </div>
       </div>
      <div class="flex justify-center">
        <a @click.prevent = userStore.logout() href="#" class="bg-[#F0F0F6] flex justify-center items-center w-10 h-10 rounded-full">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2_6646)">
              <path
                  d="M6.75 9.75V12H11.25V9.75H16.5V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V9.75H6.75ZM8.25 8.25H9.75V10.5H8.25V8.25ZM5.25 3.75V1.5C5.25 1.30109 5.32902 1.11032 5.46967 0.96967C5.61032 0.829018 5.80109 0.75 6 0.75H12C12.1989 0.75 12.3897 0.829018 12.5303 0.96967C12.671 1.11032 12.75 1.30109 12.75 1.5V3.75H15.75C15.9489 3.75 16.1397 3.82902 16.2803 3.96967C16.421 4.11032 16.5 4.30109 16.5 4.5V8.25H11.25V6.75H6.75V8.25H1.5V4.5C1.5 4.30109 1.57902 4.11032 1.71967 3.96967C1.86032 3.82902 2.05109 3.75 2.25 3.75H5.25ZM6.75 2.25V3.75H11.25V2.25H6.75Z"
                  fill="#767676"/>
            </g>
            <defs>
              <clipPath id="clip0_2_6646">
                <rect width="18" height="18" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
     </div>
      <div class="group mt-2">
        <div class="bg-black p-[6px_16px_8px_15px] text-xs capitalize relative mb-2 text-white opacity-0 group-hover:opacity-100">
          <span>blog</span>
          <div class="w-3 h-3 absolute m-[-2] bg-black rotate-45 left-1/2 translate-x-[-50%]" >
          </div>
        </div>
        <div class="flex justify-center">
          <a href="#" class="bg-[#F0F0F6] flex justify-center items-center w-10 h-10 rounded-full">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_6624)">
                <path
                    d="M15.75 1.5C4.5 1.5 3 12 2.25 16.5H3.7485C4.248 14.0002 5.49825 12.6255 7.5 12.375C10.5 12 12.75 9.375 13.5 7.125L12.375 6.375L13.125 5.625C13.875 4.875 14.628 3.75 15.75 1.5Z"
                    fill="#767676"/>
              </g>
              <defs>
                <clipPath id="clip0_2_6624">
                  <rect width="18" height="18" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
      <div class="group mt-2">
        <div class="bg-black p-[6px_16px_8px_15px] text-xs capitalize relative mb-2 text-white opacity-0 group-hover:opacity-100">
          <span>contact</span>
          <div class="w-3 h-3 absolute m-[-2] bg-black rotate-45 left-1/2 translate-x-[-50%]" >
          </div>
        </div>
        <div class="flex justify-center">
          <a href="#" class="bg-[#F0F0F6] flex justify-center items-center w-10 h-10 rounded-full">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_6602)">
                <path
                    d="M4.84125 14.25L1.5 16.875V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V13.5C16.5 13.6989 16.421 13.8897 16.2803 14.0303C16.1397 14.171 15.9489 14.25 15.75 14.25H4.84125Z"
                    fill="#767676"/>
              </g>
              <defs>
                <clipPath id="clip0_2_6602">
                  <rect width="18" height="18" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>

    </div>
    </div>

</template>

<script setup>
import {useDark, useToggle} from '@vueuse/core';
import {useUserStore} from "@/store/userStore";

const userStore = useUserStore()

const isDark = useDark();
const toggleDark = useToggle(isDark);


</script>

<style scoped>

</style>