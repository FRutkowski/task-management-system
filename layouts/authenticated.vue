<script setup lang="ts">

</script>

<template>
  <div class="grid grid-rows-[auto_1fr] h-screen w-screen bg-gradient-to-r from-purple-500 from-20% to-rose-500 to-100%">
    <div class="absolute bg-gray-900 opacity-10 border-2 border-black  shadow-xl p-10 left-0 right-0 h-24 z-0" />
    <nav class="flex items-center px-10 text-white font-bold h-24 gap-4 z-10">
      <Icon name="ic:baseline-apps" size="30px"/>
      <NuxtLink class="text-2xl" to="/">
        BeEfficient
      </NuxtLink>
      <button class="grid grid-cols-[auto_10px] items-center bg-white/10 hover:bg-white/15 rounded-lg py-3 px-4 min-w-36">
          Workspaces
        <Icon name="material-symbols:keyboard-arrow-down" size="20px" />
      </button>
      <button class="grid grid-cols-[auto_10px] items-center bg-white/10 hover:bg-white/15 rounded-lg py-3 px-4  min-w-36">
          Items
        <Icon name="material-symbols:keyboard-arrow-down" size="20px" />
      </button>
    </nav>
    <!-- <div class="grid grid-cols-[200px_1fr]"> -->
    <!--   <div class="bg-gray-200 opacity-30">hello</div> -->
    <!-- </div> -->

    <!-- <div class="bg-gray-200 opacity-30">hello</div> -->
    <div class="grid grid-cols-[1fr]">
      <slot />
    </div>
  </div>
</template>
