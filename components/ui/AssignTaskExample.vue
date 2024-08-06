<template>
  <div class="bg-gradient-to-r from-fuchsia-600 to-purple-600 w-[17rem] sm:w-[20rem] h-[20rem] mt-10 rounded-lg relative">
    <div class="absolute top-10 left-0">
      <div class="bg-gray-200 p-5 pl-0 rounded-tr rounded-br w-[5rem] h-[16rem] text-black text-xs">
        <header class="flex font-bold mb-4 items-center">
          <div
            class="w-9 h-[1.10rem] rounded-tr-md rounded-br-md"
            style="background-color: rgb(202 206 210);"
          />
        </header>

        <div class="bg-white p-2 pl-0 mb-2 rounded-tr-lg rounded-br-lg shadow-sm max-w-[250px] flex items-center">
          <div class="w-28 h-4 bg-gray-200 rounded-tr-lg rounded-br-lg" />
        </div>
        <div class="bg-white p-2 pl-0 mb-2 rounded-tr-lg rounded-br-lg shadow-sm max-w-[250px] flex items-center">
          <div class="w-28 h-4 bg-gray-200 rounded-tr-lg rounded-br-lg" />
        </div>

        <div
          class="h-[1.90rem] bg-slate-400 pr-0 mb-2 rounded-tr rounded-br shadow-sm max-w-[250px] flex items-center"
        />
        <div class="bg-white p-2 pl-0 mb-2 rounded-tr-lg rounded-br-lg shadow-sm max-w-[250px] flex items-center">
          <div class="w-28 h-4 bg-gray-200 rounded-tr-lg rounded-br-lg" />
        </div>
        <div class="bg-white p-2 pl-0 mb-2 rounded-tr-lg rounded-br-lg shadow-sm max-w-[250px] flex items-center">
          <div class="w-28 h-4 bg-gray-200 rounded-tr-lg rounded-br-lg" />
        </div>
      </div>
    </div>
    <div class="absolute top-40 left-24 drag-task">
      <BlankTask
        :border="true"
        border-color="indigo"
      />
    </div>

    <div class="absolute top-10 right-0">
      <div class="bg-gray-200 p-5 pr-0 rounded-tl rounded-bl w-[7rem] h-[16rem] text-black text-xs">
        <header class="flex font-bold mb-4 items-center">
          <div class="w-[0.30rem] h-[0.30rem] bg-slate-400" />
          <div
            class="ml-2 w-16 h-[1.10rem] rounded-md"
            style="background-color: rgb(202 206 210);"
          />
        </header>

        <div class="bg-white p-2 pr-0 mb-2 rounded-tl rounded-bl shadow-sm max-w-[250px] flex items-center">
          <div class="shrink-0 w-[0.30rem] h-[0.30rem] bg-slate-400" />
          <div class="ml-2 w-28 h-4 bg-gray-200 rounded-tl-lg rounded-bl-lg" />
        </div>
        <div
          class="h-[1.90rem] bg-slate-400 pr-0 mb-2 rounded-tl rounded-bl shadow-sm max-w-[250px] flex items-center"
        />
        <div class="bg-white p-2 pr-0 mb-2 rounded-tl rounded-bl shadow-sm max-w-[250px] flex items-center">
          <div class="shrink-0 w-[0.30rem] h-[0.30rem] bg-slate-400" />
          <div class="ml-2 w-28 h-4 bg-gray-200 rounded-tl-lg rounded-bl-lg" />
        </div>
        <div class="bg-white p-2 pe-0 mb-2 rounded-tl rounded-bl shadow-sm max-w-[250px] flex items-center">
          <div class="shrink-0 w-[0.30rem] h-[0.30rem] bg-slate-400" />
          <div class="ml-2 w-28 h-4 bg-gray-200 rounded-tl-lg rounded-bl-lg" />
        </div>
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="black"
      class="absolute top-[10.3rem] left-[6.2rem] bi bi-cursor-fill"
      viewBox="0 0 16 16"
    >
      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
    </svg>
  </div>
</template>

<style scoped>
.drag-task {
  transform: rotate(6deg);
}
</style>
