<script setup lang="ts">
defineProps<{
  drag?: boolean
}>()
</script>
<template>
  <div
    class="bg-white p-2 mb-2 rounded shadow-sm max-w-[250px] flex items-center"
    :class="drag ? 'border-2 border-indigo-800' : ''"
  >
    <div class="shrink-0 w-[0.30rem] h-[0.30rem] bg-slate-400" />
    <div class="ml-2 w-28 h-4 bg-gray-200 rounded-lg" />
  </div>
</template>
