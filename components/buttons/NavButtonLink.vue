<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>
<template>
  <NuxtLink
    class="text-white text-lg font-semibold px-10 hover:text-red-400"
    :to="to"
  >
    <slot />
  </NuxtLink>
</template>
