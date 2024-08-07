<template>
  <div class="bg-gradient-to-r from-purple-600 to-cyan-500 w-[17rem] sm:w-[20rem] h-[20rem] mt-10 rounded-lg relative ">
    <div class="absolute top-10 left-2 sm:left-8 bg-gray-200 p-5 rounded w-[160px] h-[256px] text-black text-xs">
      <header class="flex font-bold mb-4 items-center">
        <div class="shrink-0 w-[0.30rem] h-[0.30rem] bg-slate-400" />
        <div
          class="w-20 h-6 rounded-tl-full rounded-bl-full px-2 pt-[0.2rem] text-gray-400 font-bold"
          style="font-size: 0.9rem;"
        >
          Done
        </div>
      </header>
      <BlankTask
        :done="true"
      />
      <BlankTask
        :done="true"
      />
      <BlankTask
        :done="true"
      />
      <BlankTask
        :done="true"
      />
    </div>
    <div class="absolute bottom-0 right-0 bg-gray-200 w-52 sm:w-56 h-48 border-gray-400 shadow-xl border rounded-tl-xl rounded-br-lg pl-2 pt-3">
      <div class="flex items-center pb-3">
        <Icon
          name="material-symbols:arrow-back"
          class="text-gray-400"
        />
        <!-- style="background-color: rgb(202 206 210);" -->
        <div
          class="w-20 h-6 rounded-tl-full rounded-bl-full ml-20 text-gray-400 font-bold"
          style="font-size: 1.2rem;"
        >
          March
        </div>
      </div>

      <div class="grid grid-cols-6 w-full pl-6 py-2 gap-2">
        <div
          v-for="n in 4"
          :key="n"
          class="w-4 h-4 rounded-md "
          style="background-color: rgb(202 206 210);"
        />
        <div
          v-for="n in 5"
          :key="n"
          class="w-4 h-4 rounded-md text-xs"
        >
          <TaskDoneMark size="md" />
        </div>
        <div
          v-for="n in 19"
          :key="n"
          class="w-4 h-4 rounded-md "
          style="background-color: rgb(202 206 210);"
        />

        <div
          v-for="n in 2"
          :key="n"
          class="bg-gray-300 w-4 h-4 rounded-md "
        />
      </div>
    </div>
  </div>
</template>
