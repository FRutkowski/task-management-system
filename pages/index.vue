<script setup lang="ts">
</script>

<template>
  <div class="overflow-hidden grid grid-rows-[auto,1fr,auto]">
    <!-- <div class="absolute py-32 px-96 h-[89.5dvh] w-screen bg-gradient-to-r from-purple-500 from-0% via-rose-400 via-40% to-red-500 to-95%"> -->
    <div class="flex justify-center h-[89.9dvh] w-screen py-32 inset-0 top-0 left-0 bg-gradient-to-r from-indigo-900 from-0% via-purple-700 via-20% to-red-500 to-100%">
      <div
        class="text-white font-bold text-8xl"
      >
        <div
          v-aos.once="['animate__fadeInLeft']"
          data-aos-delay="2000"
          data-aos-duration="1000"
        >
          Start now.
        </div>
        <br>

        <div
          v-aos.once="['animate__fadeInRight']"
          data-aos-delay="10s"
          data-aos-duration="10s"
        >
          Be efficient. Do tasks.
        </div>
        <br>

        <div
          v-aos.once="['animate__fadeInUp']"
          data-aos-delay="10s"
          data-aos-duration="20s"
          class="text-3xl"
        >
          Application for managing tasks.
        </div>
        <!-- <div class="bg-gray-900 rounded-xl w-full h-96" /> -->
      </div>
    </div>
  </div>
</template>
