<script setup lang="ts">
import { ref } from "vue";

const { pageCount } = defineProps<{
  pageCount: number;
}>();

const emit = defineEmits(["changePage"]);

const pageCurrent = ref<number>(1);

const click = () => {
  emit("changePage", pageCurrent.value);
};
</script>

<template>
  <!-- Pagination -->
  <div class="grid grid-cols-2 bg-gray-200">
    <div class="ml-5 my-auto">
      <p class="text-red-600">
        หน้าที่ {{ pageCurrent }} จากทั้งหมด {{ pageCount }} หน้า
      </p>
    </div>
    <nav>
      <ul class="inline-flex -space-x-px float-right mr-2">
        <li>
          <button
            v-if="pageCurrent != 1"
            @click="(pageCurrent = pageCurrent - 1), click()"
            class="btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M8 12l6-6v12z" />
            </svg>
          </button>
        </li>

        <li>
          <button
            v-if="pageCurrent != pageCount"
            @click="(pageCurrent = pageCurrent + 1), click()"
            class="btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M16 12l-6 6V6z" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
.btn {
  @apply my-1 mx-0.5 py-1 px-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:opacity-80 cursor-pointer;
}
</style>
