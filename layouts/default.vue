<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen">
    <!-- Tutaj będzie nawigacja -->
    <nav class="flex bg-black p-9 sticky top-0 z-10">
      <NavButton
        class="ml-96"
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
        class="mr-48"
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
