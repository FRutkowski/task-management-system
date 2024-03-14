<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
</script>

<template>
  <div class="overflow-hidden grid grid-rows-[auto,1fr,auto]">
    <!-- <div class="absolute py-32 px-96 h-[89.5dvh] w-screen bg-gradient-to-r from-purple-500 from-0% via-rose-400 via-40% to-red-500 to-95%"> -->
    <div class="flex justify-center h-[89.5dvh] w-screen py-32 inset-0 top-0 left-0 ">
      <div
        class="text-white font-bold text-8xl"
      >
        <div
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          Start now.
        </div>
        <br>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          Be efficient. Do tasks.
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-once="true"
          data-aos-duration="1500"
          class="flex text-3xl pr-32 py-28 items-center"
        >
          Application for managing tasks.
          <button class="ml-auto rounded-full border-2 border-white w-64 h-12 text-xl bg-transparent delay-150 duration-100 hover:text-black hover:bg-white">
            Try it yourself
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
