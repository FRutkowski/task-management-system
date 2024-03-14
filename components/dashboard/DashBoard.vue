<script setup lang="ts">
import type { Column, Task } from '~/types'
import draggable from 'vuedraggable'
import { nanoid } from 'nanoid'
const columns = useLocalStorage<Column[]>('trello board', [
  {
    id: nanoid(),
    title: 'Backlog',
    tasks: [
      { id: nanoid(), title: 'Create marketing landing page', createdAt: new Date() },
      { id: nanoid(), title: 'Develop cool feature', createdAt: new Date() },
      { id: nanoid(), title: 'Fix nav bug', createdAt: new Date() }
    ]
  },
  { id: nanoid(), title: 'Selected for Dev', tasks: [] },
  { id: nanoid(), title: 'In progress', tasks: [] },
  { id: nanoid(), title: 'QA', tasks: [] },
  { id: nanoid(), title: 'Complete', tasks: [] }

], {
  serializer: {
    read: (value) => {
      return JSON.parse(value).map((column: Column) => {
        column.tasks = column.tasks.map((task: Task) => {
          task.createdAt = new Date(task.createdAt)
          return task
        })

        return column
      })
    },
    write: (value) => JSON.stringify(value)
  }
})

const shift = useKeyModifier('Shift')

const createColumn = () => {
  const column: Column = {
    id: nanoid(),
    title: '',
    tasks: []
  }

  columns.value.push(column)
  nextTick(() => {
    (
      document.querySelector(
        '.column:last-of-type .title-input'
      ) as HTMLInputElement).focus()
  })
}
</script>

<template>
  <div class="flex items-start overflow-x-auto gap-4">
    <draggable
      v-model="columns"
      group="columns"
      :animation="150"
      handle=".drag-handle"
      item-key="id"
      class="flex gap-4  items-start"
    >
      <template
        #item="{ element: column }: { element: Column }"
      >
        <div class="column bg-gray-200 p-5 rounded min-w-[250px]">
          <header class="flex font-bold mb-4 items-center">
            <DragHandle />
            <input
              v-model="column.title"
              class="title-input bg-transparent focus:bg-white rounded px-1 w-4/5"
              type="text"
              @keyup.enter="($event.target as HTMLInputElement).blur()"
              @keydown.backspace="column.title === '' ? columns = columns.filter(c => c.id !== column.id) : null"
            >
          </header>
          <draggable
            v-model="column.tasks"
            :group="{ name: 'tasks', pull: shift ? 'clone' : true }"
            :animation="150"
            handle=".drag-handle"
            item-key="id"
          >
            <template #item="{ element: task }: { element: Task }">
              <div>
                <DashBoardTask
                  :task="task"
                  @delete="column.tasks = column.tasks.filter((t) => t.id !== $event)"
                />
              </div>
            </template>
          </draggable>
          <footer>
            <NewTask @add="column.tasks.push($event)" />
          </footer>
        </div>
      </template>
    </draggable>
    <button
      class="bg-gray-200 whitespace-nowrap p-2 rounded opacity-50"
      @click="createColumn"
    >
      + Add another column
    </button>
  </div>
</template>
