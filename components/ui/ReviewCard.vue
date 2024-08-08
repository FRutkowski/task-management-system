<script setup lang="ts">
const props = defineProps<{
  review: Review
}>()
console.log('It exists!')
</script>
<!--  sm:h-[28rem]  xl:h-[20.5rem] -->
<template>
  <div class="bg-gray-800 rounded-lg min-w-[20rem] sm:min-w-[22rem] max-h-min xl:min-w-[30rem] p-8">
    <div class="flex ">
      <Avatar
        class="ml-0"
        :src="review.avatar"
      />
      <div class="text-base font-bold px-4">
        {{ review.name }}
        <Rating class="w-24" />
      </div>
    </div>
    <div class="text-xl italic py-6">
      {{ '„' + review.text + '”' }}„”
    </div>
  </div>
</template>
