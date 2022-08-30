<script setup lang="ts">
const props = defineProps(["code", "text"]);
</script>

<template>
  <div
    v-if="props.code === 'success'"
    class="absolute top-20 right-3 fadeInRight"
  >
    <div
      class="p-2 bg-green-500 items-center text-green-100 leading-none lg:rounded-full flex lg:inline-flex"
      role="alert"
    >
      <span
        class="flex rounded-full bg-green-400 uppercase px-2 py-1 text-xs font-bold mr-3"
        >แจ้งเตือน</span
      >
      <span class="font-semibold mr-2 text-left flex-auto">{{
        props.text
      }}</span>
    </div>
  </div>
  <div
    v-else-if="props.code === 'error'"
    class="absolute top-20 right-3 fadeInRight"
  >
    <div
      class="p-2 bg-red-800 items-center text-red-100 leading-none lg:rounded-full flex lg:inline-flex"
      role="alert"
    >
      <span
        class="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3"
        >แจ้งเตือน</span
      >
      <span class="font-semibold mr-2 text-left flex-auto">{{
        props.text
      }}</span>
    </div>
  </div>
  <div
    v-else-if="props.code === 'warning'"
    class="absolute top-20 right-3 fadeInRight"
  >
    <div
      class="p-2 bg-yellow-800 items-center text-yellow-100 leading-none lg:rounded-full flex lg:inline-flex"
      role="alert"
    >
      <span
        class="flex rounded-full bg-yellow-500 uppercase px-2 py-1 text-xs font-bold mr-3"
        >แจ้งเตือน</span
      >
      <span class="font-semibold mr-2 text-left flex-auto">{{
        props.text
      }}</span>
    </div>
  </div>
  <div
    v-else-if="props.code === 'info'"
    class="absolute top-20 right-3 fadeInRight"
  >
    <div
      class="p-2 bg-blue-800 items-center text-blue-100 leading-none lg:rounded-full flex lg:inline-flex"
      role="alert"
    >
      <span
        class="flex rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3"
        >แจ้งเตือน</span
      >
      <span class="font-semibold mr-2 text-left flex-auto">{{
        props.text
      }}</span>
    </div>
  </div>
  <div
    v-else="props.code === 'dark'"
    class="absolute top-20 right-3 fadeInRight"
  >
    <div
      class="p-2 bg-gray-800 items-center text-gray-100 leading-none lg:rounded-full flex lg:inline-flex"
      role="alert"
    >
      <span
        class="flex rounded-full bg-gray-500 uppercase px-2 py-1 text-xs font-bold mr-3"
        >แจ้งเตือน</span
      >
      <span class="font-semibold mr-2 text-left flex-auto">{{
        props.text
      }}</span>
    </div>
  </div>
</template>
