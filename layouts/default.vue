<script setup lang="ts">
const { y, arrivedState } = useScroll(window)
onMounted(() => {
  y.value = 0
})

const SM = 640
const MD = 768
const LG = 1024
const XL = 1536
const { width } = useWindowSize()
</script>

<template>
  <div>
    <ClientOnly>
      <div class="min-h-screen bg-gradient-to-r from-indigo-900 from-0% via-purple-700 via-20% to-red-500 to-100%">
        <!-- Tutaj będzie nawigacja -->
        <nav
          class="flex bg-black p-9 sticky top-0 z-50 shadow-md items-center"
          :class="arrivedState.top ? 'bg-black' : 'backdrop-blur-xl bg-gray-900/40'"
        >
          <img
            src="~/assets/icons/logo2.svg"
            class=" sm:ml-10 2xl:ml-64 mr-10 hover:cursor-pointer"
            :class="width > 400 ? 'h-[3.4rem]' : 'h-[2.5rem]'"
            @click="navigateTo('/')"
          >
          <NavButton
            v-if="width > 750"
            text-color="purple"
          >
            Home
          </NavButton>
          <NavButton
            v-if="width > 750"
            to="/description"
            text-color="purple"
          >
            Product
          </NavButton>
          <NavButton
            v-if="width > 950"
            text-color="purple"
          >
            About
          </NavButton>
          <NavButtonLink
            v-if="width > 1140"
            class="ml-auto"
            to="/login"
          >
            Login
          </NavButtonLink>
          <NavButtonLink
            v-if="width > 1140"
            class="sm:mr-24 2xl:mr-64"
            to="/register"
          >
            Register
          </NavButtonLink>
          <Icon
            v-else
            name="material-symbols:menu-rounded"
            class="w-12 h-12 ml-auto"
            style="color: white"
          />
        </nav>
        <!-- Tutaj będzie strona -->
        <div>
          <slot />
        </div>
        <div class="bg-gray-300 h-94 w-full">
          Hello world
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
