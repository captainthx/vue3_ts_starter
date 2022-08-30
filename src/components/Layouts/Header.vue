<script setup lang="ts">
import { useAuthStore } from "@/store/modules/auth";
import { useLayoutStore } from "@/store/modules/layout";

const title = import.meta.env.VITE_WEBSITE_NAME;
const storeAuth = useAuthStore();
const storeLayout = useLayoutStore();

const Logout = () => {
  if (confirm("คุณต้องการออกจากระบบใช่ไหม?")) {
    storeAuth.Logout();
  }
};
</script>

<template>
  <!-- header page -->
  <header
    class="fixed top-3 right-5 z-10 flex rounded-xl items-center justify-between shadow-sm bg-white p-2"
    :class="storeLayout.asideToggleStatus ? 'left-20' : 'left-56'"
  >
    <!-- logo -->
    <div class="flex items-center space-x-2">
      <img
        src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2018/05/1-google-logo.png"
        width="50"
      />
    </div>

    <!-- title -->
    <div class="flex items-center space-x-2">
      <h1 class="font-bold text-xl">{{ title }}</h1>
    </div>

    <!-- button profile -->
    <div class="flex items-center space-x-2">
      <button
        @click="Logout"
        class="h-9 w-9 overflow-hidden rounded-full hover:fill-red-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4-5 4z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>
