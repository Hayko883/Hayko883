<template>
  <div class="">
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6  ">
        <div
            class="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an user
            </h1>
            <form @submit.prevent='submitForm' class="space-y-4 md:space-y-6" action="#">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full
                  Name</label>
                <input v-model="user.name" type="text" name="name" id="name"
                       class="bg-gray-50 border border-gray-300 hover:border-red-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="John Smith" required="">
              </div>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input v-model="user.email" type="email" name="email" id="email"
                       class="bg-gray-50 border border-gray-300 hover:border-red-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="name@company.com" required="">
              </div>
              <div>
                <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                <input v-model="user.role" type="number" name="age" id="age"
                       class="bg-gray-50 border border-gray-300 hover:border-red-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="11" required="">
              </div>
              <div>
                <label for="password"
                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input v-model="user.password" type="password" name="password" id="password" placeholder="••••••••"
                       class="bg-gray-50 border border-gray-300 hover:border-red-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required="">
              </div>
              <div>
                <label for="address"
                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                <input v-model="user.address" type="text" name="address" id="address"
                       class="bg-gray-50 border border-gray-300 hover:border-red-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Address" required="">
              </div>

              <button type="submit"
                      class="w-full mt-6 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Create an user
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

import {ref} from "vue";
import {useAdminStore} from "@/store/adminStore";

const adminStore = useAdminStore()
const user = ref({
  name: '',
  email: '',
  role: 0,
  password: '',
  address: ''

})
const submitForm = async ()=> {
  const formData = new FormData();
  formData.append('name', user.value.name);
  formData.append('email', user.value.email);
  formData.append('role', user.value.role);
  formData.append('password', user.value.password);
  formData.append('address', user.value.address);

  console.log(formData, '0000000000')

  adminStore.createUser(formData).then(() => {
    console.log(adminStore.users,'yyyyyyyy')
  }).catch(error => {
    console.log(error, 'error')
  })
}
</script>

<style scoped>

</style>