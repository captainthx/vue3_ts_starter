<script setup lang="ts">
const emit = defineEmits(["closeModal"]);
defineProps<{
  title: string;
}>();
</script>
<template>
  <Teleport to="body">
    <div
      class="fixed z-40 top-0 right-0 left-0 bottom-0 h-full w-full bg-black bg-opacity-50"
    >
      <div
        class="p-4 max-w-xl mx-auto relative left-0 right-0 overflow-hidden mt-5 fadeInTop"
      >
        <div
          class="shadow absolute right-0 top-0 w-10 h-10 rounded-full bg-white text-gray-500 hover:text-gray-800 inline-flex items-center justify-center cursor-pointer"
          @click="emit('closeModal')"
        >
          <svg
            class="fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"
            />
          </svg>
        </div>

        <div class="shadow w-full rounded-lg bg-white overflow-hidden block p-8">
          <h2 class="font-bold text-2xl mb-2 text-gray-800 border-b pb-2">
            {{ title }}
          </h2>
          <div class="max-w-2xl mx-auto bg-white">
            <slot></slot>
          </div>
        </div>
      </div></div
  ></Teleport>
</template>
