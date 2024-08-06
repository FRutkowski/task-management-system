<template>
  <div class="bg-gradient-to-r from-rose-500 to-pink-500 w-[17rem] sm:w-[20rem] h-[20rem] mt-10 rounded-lg relative">
    <div class="absolute top-10 left-16 sm:left-20">
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
    <!-- <svg -->
    <!--   width="160" -->
    <!--   height="100" -->
    <!--   viewBox="0 0 100 100" -->
    <!--   xmlns="http://www.w3.org/2000/svg" -->
    <!--   transform="rotate(25)" -->
    <!--   class="absolute bottom-0 right-12" -->
    <!-- > -->
    <!--   <line -->
    <!--     x1="10" -->
    <!--     y1="50" -->
    <!--     x2="120" -->
    <!--     y2="50" -->
    <!--     stroke="black" -->
    <!--     stroke-width="2" -->
    <!--   /> -->
    <!--   <line -->
    <!--     x1="10" -->
    <!--     y1="50" -->
    <!--     x2="20" -->
    <!--     y2="45" -->
    <!--     stroke="black" -->
    <!--     stroke-width="2" -->
    <!--   /> -->
    <!--   <line -->
    <!--     x1="10" -->
    <!--     y1="50" -->
    <!--     x2="20" -->
    <!--     y2="55" -->
    <!--     stroke="black" -->
    <!--     stroke-width="2" -->
    <!--   /> -->
    <!-- </svg> -->
  </div>
</template>
