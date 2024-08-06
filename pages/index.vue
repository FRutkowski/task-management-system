<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const SM = 640
const MD = 768
const LG = 1024
const XL = 1536

const { width } = useWindowSize()
</script>

<template>
  <div class="overflow-hidden">
    <!-- <div class="absolute py-32 px-96 h-[89.5dvh] w-screen bg-gradient-to-r from-purple-500 from-0% via-rose-400 via-40% to-red-500 to-95%"> -->
    <div class="lg:flex justify-center h-[89.5dvh] w-full py-32 inset-0 top-0 left-0 ">
      <div
        class="text-white font-bold text-[2.9rem] sm:text-[3.6rem] md:text-[3.8rem] lg:text-[4rem] xl:text-[4.5rem] 2xl:text-8xl px-10"
      >
        <div
          class="sm:py-6 md:py-10"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          Start now.
        </div>
        <div class="md:flex">
          <div
            class="sm:py-6 md:py-10"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            Be efficient.
          </div>
          <div
            class="sm:py-6 md:py-10 md:px-[0.5em]"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            Do tasks.
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-once="true"
          data-aos-duration="1500"
          class="flex text-[0.4em] py-28 items-center lg:min-w-[900px]"
        >
          Application for managing tasks.
          <button class="ml-auto rounded-full border-2 border-white w-64 h-12 text-xl bg-transparent delay-150 duration-100 hover:text-black hover:bg-white">
            Try it yourself
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center h-[120dvh] w-full bg-gray-950 text-white py-14 px-24">
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-duration="1000"
        class="text-3xl py-10"
      >
        How does it work...
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 px-20 py-20 gap-40">
        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-once="true"
          data-aos-duration="1000"
          class="w-[28rem] bg-gray-800 rounded-lg p-10 text-2xl"
        >
          Add your tasks
          <AddTaskExample />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="1400"
          data-aos-once="true"
          class="w-[28rem] bg-gray-800 rounded-lg p-10 text-2xl"
        >
          Assign them
          <AssignTaskExample />
          <div class="bg-gradient-to-r from-pink-500 to-rose-500" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="1800"
          data-aos-once="true"
          data-aos-duration="1000"
          class="w-[28rem] bg-gray-800 rounded-lg p-10 text-2xl"
        >
          Be productive
          <FinishedTasksExample />
        </div>
        <div class="flex justify-center items-center col-span-3 text-2xl py-20">
          <div class="text-gray-500 text-3xl px-2">
            „
          </div>
          <div class="italic">
            The productivity of work is not the responsibility of the worker but of the manager.
          </div>
          <div class="text-gray-500 text-3xl px-2">
            ”
          </div>
          ~ Peter Drucker
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.textarea {
    -moz-user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select: none;
}
</style>
