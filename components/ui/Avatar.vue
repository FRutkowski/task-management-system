<script setup lang="ts">
const props = defineProps<{
  src: string
}>()

</script>
<template>
  <div>
    <NuxtImg
      :src="src"
      class="w-[65px] h-[65px] border-full align-middle rounded-[50%]"
    />
  </div>
</template>

<style scoped>
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
