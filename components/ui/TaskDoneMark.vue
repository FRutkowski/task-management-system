<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: string
}>(), {
  size: 'sm'
})

const sideLength = ref()
const markWidth = ref()
const markHeight = ref()
const markTop = ref()
const markLeft = ref()
switch (props.size) {
  case 'md':
    markTop.value = '3.3px'
    markLeft.value = '5.5px'
    markWidth.value = '5px'
    markHeight.value = '8px'
    sideLength.value = '1.3em'
    break
  case 'sm':
  default:
    markTop.value = '2px'
    markLeft.value = '4px'
    markWidth.value = '4px'
    markHeight.value = '7px'
    sideLength.value = '1em'
    break
}
</script>
<template>
  <input
    type="checkbox"
    disabled
    checked
  >
</template>
<style scoped>
input[type="checkbox"] {
  position: relative;
  width: v-bind(sideLength);
  height: v-bind(sideLength);
  border-radius: 4px;
  appearance: none;
  &::before {
    position: absolute;
    content: '';
    display: block;
    top: v-bind(markTop);
    left:v-bind(markLeft);
    width: v-bind(markWidth);
    height: v-bind(markHeight);
    border-style: solid;
    border-color: white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  &:checked {
    border-color: green;
    @apply bg-green-600;
    &::before {
      opacity: 1;
    }
  }
}
</style>
