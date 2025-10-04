<script setup lang="ts">
const props = defineProps<{
  to: string
  textColor?: string
}>()

const textColor = toRef(props, 'textColor')
const { onHoverTextColor: textColorStyle } = useHoverTextColor(textColor)
</script>
<template>
  <NuxtLink
    class="text-white text-lg font-semibold px-10"
    :class="textColorStyle"
    :to="to"
  >
    <slot />
  </NuxtLink>
</template>
