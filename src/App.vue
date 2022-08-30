<script setup lang="ts"></script>

<template>
  <section class="bg-gray-100">
    <main class="min-h-screen w-full container mx-auto">
      <router-view />
    </main>
  </section>
</template>

<style lang="postcss">
body::-webkit-scrollbar {
  @apply w-[2px];
}

body::-webkit-scrollbar-track {
  @apply bg-gray-300;
}

body::-webkit-scrollbar-thumb {
  @apply bg-yellow-200;
}
</style>
