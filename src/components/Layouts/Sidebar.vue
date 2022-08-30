<script setup lang="ts">
import NavLinks from "../../core/config/NavLinks";
import { useLayoutStore } from "@/store/modules/layout";

const store = useLayoutStore();
</script>
<template>
  <!-- aside -->
  <aside
    @mouseenter="store.asideToggle(false)"
    @mouseleave="store.asideToggle(true)"
    class="fixed z-10 top-10 left-2 bottom-7 flex min-w-fit max-h-full overflow-y-scroll rounded-xl flex-col space-y-2 bg-white"
    :class="{ 'w-16': store.asideToggleStatus }"
  >
    <!-- logo -->
    <div class="flex my-3.5 mx-auto">
      <img
        v-if="store.asideToggleStatus"
        src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2018/05/1-google-logo.png"
        alt="logo"
        width="25"
      />
      <span v-else class="font-extrabold uppercase my-auto">Manages</span>
    </div>

    <router-link
      v-for="link in NavLinks.filter((lk:any) => lk.permission)"
      :to="`/manages/${link.path}`"
      class="link"
    >
      <i :class="`${link.icon} text-base`"></i>
      <span v-if="!store.asideToggleStatus">{{ link.name }}</span>
    </router-link>
  </aside>
</template>
<!-- page -->

<style>
aside .link {
  @apply flex items-center space-x-1 mx-3.5 rounded-md px-2 py-3 hover:ring-1 hover:ring-black hover:font-extrabold;
  transition: 0.3s ease;
}
aside .router-link-active {
  @apply border bg-gray-100 shadow-sm;
  transition: 0.3s ease;
}
</style>
