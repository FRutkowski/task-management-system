<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>
<template>
  <!-- <div class="bg-gradient-to-tr from-purple-700 from-0% via-pink-700 via-20% to-red-500 to-100% min-h-screen w-full"> -->
  <div class="w-full flex justify-center items-center h-full">
    <div class="rounded-lg bg-white shadow-lg w-[30rem] min-h-min p-14 text-lg font-semibold">
      <div class="text-center text-2xl font-bold pb-20">
        Sign in to your account
      </div>
      <form action="">
        <div class="text-sm py-4">
          Email address
        </div>
        <input
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600  sm:text-sm sm:leading-6"
          type="email"
        >
        <div class="text-sm py-4">
          Password
        </div>
        <input
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
          type="password"
        >
        <button class="mt-24 text-md font-semibold rounded-md bg-violet-500 block w-full text-white py-2.5"> Sign in</button>
      </form>
    </div>
  </div>
</template>
