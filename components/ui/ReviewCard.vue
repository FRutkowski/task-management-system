<script setup lang="ts">
const props = defineProps<{
  review: Review
}>()
console.log('It exists!')
</script>

<template>
  <div class="bg-gray-800 rounded-lg w-[600px] h-72 p-8">
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
      „BeEfficient has completely transformed how I manage my daily tasks.
      The drag-and-drop feature is incredibly intuitive and helps me keep everything organized effortlessly.
      I love the flexibility it offers with different planning methods too!”
    </div>
  </div>
</template>
