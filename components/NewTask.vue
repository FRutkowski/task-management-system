<script setup lang="ts">
import type { Task } from '~/types'
import { nanoid } from 'nanoid'

const emit = defineEmits<{
  add: [payload: Task]
}>()

const focused = ref(false)
const title = ref('')

const createTask = (event: Event) => {
  if (title.value.trim()) {
    event.preventDefault()
    emit('add', {
      id: nanoid(),
      title: title.value.trim(),
      createdAt: new Date()
    } as Task)
  }

  title.value = ''
}
</script>

<template>
  <div>
    <textarea
      v-model="title"
      class="focus:bg-white focus:shadow resize-none rounded w-full border-none bg-transparent p-2 cursor-pointer"
      :class="{
        'h-7': !focused,
        'h-10': focused,
      }"
      style="outline: none !important"
      :placeholder="!focused ? '+ Add a Card' : 'Enter a title for this card'"
      @keydown.tab="createTask"
      @keyup.enter="createTask"
      @focus="focused = true"
      @blur="focused = false"
    />
  </div>
</template>
