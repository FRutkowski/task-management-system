<script setup lang="ts">
const props = defineProps<{
  border?: boolean
  borderColor?: string
  done?: boolean
}>()

const borderColor = toRef(props, 'borderColor')
const { borderColor: borderColorStyle } = useBorderColor(borderColor)

</script>
<template>
  <div
    class="bg-white p-2 mb-2 rounded shadow-sm max-w-[250px] flex items-center"
    :class="border ? `border-2 ${borderColorStyle}` : ''"
  >
    <div v-if="!done">
      <div class="shrink-0 w-[0.30rem] h-[0.30rem] bg-slate-400" />
    </div>
    <div v-else>
      <TaskDoneMark />
    </div>
    <div class="ml-2 w-28 h-4 bg-gray-200 rounded-lg" />
  </div>
</template>

<style scoped>
  </style>
