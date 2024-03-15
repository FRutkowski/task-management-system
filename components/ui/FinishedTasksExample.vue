<template>
  <div class="bg-gradient-to-r from-purple-600 to-cyan-500 w-full h-[20rem] mt-10 rounded-lg relative">
    <div class="absolute top-10 left-24">
      <div class="bg-gray-200 p-5 rounded w-[10rem] h-[16rem] text-black text-xs">
        <header class="flex font-bold mb-4 items-center">
          <div class="w-[0.30rem] h-[0.30rem] bg-slate-400" />
          <div
            class="ml-2 w-16 h-[1.10rem] rounded-md"
            style="background-color: rgb(202 206 210);"
          />
        </header>
        <BlankTask />
        <BlankTask />
        <BlankTask />
        <footer>
          <div class="textarea bg-white p-2 mb-2 rounded shadow-sm max-w-[250px] flex text-slate-400 border-2 border-indigo-600">
            <div class="h-[1rem] mt-[0.05rem] border-l border-black" />
            Enter a title of this card
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
