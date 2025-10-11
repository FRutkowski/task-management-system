<script setup lang="ts">
definePageMeta({
  layout: 'authenticated'
})
</script>

<template>
  <div class="relative p-10 overflow-auto rounded-tl-xl">
    <!-- <div class="absolute bg-white opacity-30 rounded-lg shadow-lg h-full right-10 left-10 bottom-20 top-10"> -->
    <!-- </div> -->
    <!---->
    <!-- <DashBoard class="absolute pr-10 pt-10 right-20 left-20 board-scroll" /> -->

    <DashBoard class="pr-10 pt-10 right-20 left-20 board-scroll" />
  </div>
</template>
