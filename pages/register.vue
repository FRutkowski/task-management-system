<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>
<template>
  <div class="flex justify-center items-center sm:py-12 w-full min-h-max">
    <div class="bg-white sm:shadow-lg p-6 sm:p-14 rounded-lg w-[30rem] max-h-min font-semibold text-lg">
      <div class="pb-20 font-bold text-2xl text-center">
        Create an account
      </div>
      <form action="">
        <div class="py-4 text-sm">
          Email address
        </div>
        <input
          class="block border-0 shadow-sm py-1.5 rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-violet-600 ring-inset focus:ring-inset w-full text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          type="email"
        >
        <div class="py-4 text-sm">
          Username
        </div>
        <input
          class="block border-0 shadow-sm py-1.5 rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-violet-600 ring-inset focus:ring-inset w-full text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          type="text"
        >
        <div class="py-4 text-sm">
          Password
        </div>
        <input
          class="block border-0 shadow-sm py-1.5 rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-violet-600 ring-inset focus:ring-inset w-full text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          type="password"
        >
        <div class="py-4 text-sm">
          Confirm Password
        </div>
        <input
          class="block border-0 shadow-sm py-1.5 rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-violet-600 ring-inset focus:ring-inset w-full text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          type="password"
        >
        <button class="block bg-violet-500 hover:bg-violet-800 mt-24 mb-10 sm:mb-0 py-2.5 rounded-md w-full font-semibold text-md text-white">
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>
