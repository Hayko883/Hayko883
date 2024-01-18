<template>
  <div>
    <div>
      <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div class="flex items-center justify-between pb-6">
          <div>
            <h2 class="font-semibold text-gray-700">User Accounts</h2>
            <span class="text-xs text-gray-500">View accounts of registered users</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="ml-10 space-x-8 lg:ml-40 flex">
              <button
                  class="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"/>
                </svg>
                CSV
              </button>
              <button
                  class="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
                Create User
              </button>
            </div>
          </div>
        </div>
        <div class="overflow-y-hidden rounded-lg border">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
              <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                <th class="px-5 py-3">ID</th>
                <th class="px-5 py-3">Full Name</th>
                <th class="px-5 py-3">User Role</th>
                <th class="px-5 py-3">Address</th>
                <th class="px-5 py-3">Status</th>
                <th class="px-5 py-3">Edit / Delete</th>
              </tr>
              </thead>
              <tbody class="text-gray-500">
              <tr v-for="user in users">
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap">{{ user.id }}</p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img class="h-full w-full rounded-full" src="@/assets/icons/profile.png" alt=""/>
                    </div>
                    <div class="ml-3">
                      <p class="whitespace-no-wrap">{{ user.name }}</p>
                    </div>
                  </div>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p v-if="user.role === 1" class="whitespace-no-wrap">Administrator</p>
                  <p v-else class="whitespace-no-wrap">User</p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap">{{ user.address }}</p>
                </td>

                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <span class="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Active</span>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div class="flex gap-x-2">
                    <button
                        class="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-green-700">
                      Show
                    </button>
                    <router-link :to="{name:'EditUser',params:{id: user.id}}">
                      <button
                          class="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
                        Edit
                      </button>
                    </router-link>
                    <button v-if="user.role !== 1"
                        @click="deleteUser(user.id)"
                        class="flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-red-700">
                      Delete
                    </button>

                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
            <span class="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
            <div class="mt-2 inline-flex sm:mt-0">
              <button
                  class="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                Prev
              </button>
              <button
                  class="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

import {useAdminStore} from "@/store/adminStore";
import {computed, onMounted} from "vue";

const adminStore = useAdminStore()
const users = computed(() => adminStore.users)
onMounted(async () => {
  await adminStore.getUsers()
})
const deleteUser = async (userId) => {
  // Confirm with the user before deleting
  const confirmDelete = window.confirm("Are you sure you want to delete this user?");
  if (!confirmDelete) {
    return;
  }

  try {
    // Call the deleteUser method from the store
    await adminStore.deleteUser(userId);

  } catch (error) {
    console.error("Error deleting user:", error.message);
  }
};


</script>

<style scoped>

</style>