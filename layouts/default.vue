<script setup lang="ts">
const { y, arrivedState } = useScroll(window)
onMounted(() => {
  y.value = 0
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-r from-indigo-900 from-0% via-purple-700 via-20% to-red-500 to-100%">
    <!-- Tutaj będzie nawigacja -->
    <nav
      class="flex bg-black p-9 sticky top-0 z-10 shadow-md items-center"
      :class="arrivedState.top ? 'bg-black' : 'backdrop-blur-xl bg-gray-900/40'"
    >
      <img
        src="~/assets/icons/logo2.svg"
        class="h-[3.4rem] sm:ml-24 md:ml-32 lg:ml-40 xl:ml-64 mr-10 hover:cursor-pointer"
        @click="navigateTo('/')"
      >
      <NavButton
        text-color="purple"
      >
        Home
      </NavButton>
      <NavButton
        to="/description"
        text-color="purple"
      >
        Product
      </NavButton>
      <NavButton
        text-color="purple"
      >
        About
      </NavButton>
      <NavButtonLink
        class="ml-auto"
        to="/login"
      >
        Login
      </NavButtonLink>
      <NavButtonLink
        class="sm:mr-24 md:mr-32 lg:mr-40 xl:mr-64"
        to="/register"
      >
        Register
      </NavButtonLink>
    </nav>
    <!-- Tutaj będzie strona -->
    <div>
      <slot />
    </div>
  </div>
</template>
