<script setup lang="ts">
import Header from "@/components/Layouts/Header.vue";
import Sidebar from "@/components/Layouts/Sidebar.vue";
import { useLayoutStore } from "@/store/modules/layout";

const store = useLayoutStore();
</script>

<template>
  <main class="w-full min-h-screen text-gray-700">
    <Header />
    <div>
      <Sidebar />
      <div
        class="transition-all absolute top-20 bottom-0 right-5 mb-10"
        :class="store.asideToggleStatus ? 'left-20' : 'left-56'"
      >
        <RouterView v-slot="{ Component }">
          <template v-if="Component">
            <KeepAlive>
              <Suspense>
                <!-- main content -->
                <component :is="Component"></component>

                <!-- loading state -->
                <template #fallback>
                  <Loading />
                </template>
              </Suspense>
            </KeepAlive>
          </template>
        </RouterView>
      </div>
    </div>
  </main>
</template>
