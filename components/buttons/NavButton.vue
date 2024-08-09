<script setup lang="ts">
const props = defineProps<{
  textColor: string
  hidden: boolean
}>()

const textColorProp = toRef(props, 'textColor')
const { onHoverTextColor: textColorStyle } = useHoverTextColor(textColorProp)
</script>
<template>
  <button
    :hidden="hidden"
    class="navButton text-white text-lg font-semibold px-10"
    :class="textColorStyle"
  >
    <slot />
  </button>
</template>
