<script setup lang="ts">
import { onMounted, ref } from "vue";

const { selectTitle } = defineProps<{
  title: string;
  modal?: boolean;
  date?: boolean;
  selectTitle?: string;
  select?: Array<any>;
  export?: boolean;
  exportLoading?: boolean;
  loading: boolean;
}>();

const searchText = ref<string>("");
const selectDate = ref<string>("");
const selectOption = ref<string>("");
const emit = defineEmits([
  "fetch",
  "search",
  "getByDate",
  "selected",
  "openModal",
  "export",
]);

const search = () => {
  selectDate.value = "";
  emit("search", searchText.value);
};

const checkSearch = () => {
  if (searchText.value === "") emit("fetch");
};

const getByDate = () => {
  searchText.value = "";
  emit("getByDate", selectDate.value);
};

const selected = () => {
  searchText.value = "";
  emit("selected", selectOption.value);
};

onMounted(() => {
  if (selectTitle != undefined) {
    selectOption.value = selectTitle;
  }
});
</script>

<template>
  <div>
    <div class="float-left mt-3.5 ml-5">
      <span
        class="px-4 py-1 rounded-md text-lg font-bold text-blue-600 ring-1 ring-blue-600"
        >{{ title }}</span
      >
    </div>
    <div class="float-right my-2 mr-5">
      <div class="flex">
        <div
          v-if="select"
          class="bg-white rounded-md h-10 ring-1 ring-gray-300 hover:ring-blue-500 mr-2"
        >
          <select
            v-model="selectOption"
            :disabled="loading"
            @change="selected"
            class="border-0 focus:ring-0 rounded-md"
          >
            <option disabled>{{ selectTitle }}</option>
            <option value="all">ทั้งหมด</option>
            <option v-for="stock in select" :value="stock.id" :key="stock.id">
              {{ stock.stock_id }}
            </option>
          </select>
        </div>
        <div v-if="date" class="box-input mr-2">
          <div class="search-input">
            <input
              v-model="selectDate"
              @change="getByDate()"
              type="date"
              class="border-0 focus:ring-0 mt-2"
            />
          </div>
        </div>
        <div class="box-input">
          <div class="search-input">
            <svg
              @click="(searchText = ''), emit('fetch')"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class="-mt-1 inline-block cursor-pointer hover:fill-red-600"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
              />
            </svg>
            <input
              v-model="searchText"
              @keyup.enter="search()"
              @input="checkSearch()"
              type="text"
              placeholder="พิมพ์สิ่งที่คุณต้องการค้นหา"
              class="border-0 focus:ring-0 mt-2"
            />

            <svg
              @click="search()"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class="-mt-1 inline-block hover:fill-blue-600 cursor-pointer"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
              />
            </svg>
          </div>
        </div>
        <div v-if="modal" class="inline-block">
          <button
            @click="emit('openModal')"
            :disabled="loading"
            class="btn mx-2"
            :class="{ 'opacity-80 cursor-wait': loading }"
          >
            <i class="bi bi-pencil-square mr-2"></i>
            <span>Add</span>
          </button>
        </div>
        <div v-if="export" class="inline-block">
          <button
            @click="emit('export')"
            :disabled="exportLoading || loading"
            class="btn"
            :class="{ 'opacity-80 cursor-wait': exportLoading || loading }"
          >
            <svg
              v-if="exportLoading"
              class="inline -mt-1 w-5 h-5 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            <i v-else class="bi bi-arrow-bar-up mr-2"></i><span>Export</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-input {
  @apply flex-1 inline-block align-middle;
}

.search-input:hover svg {
  transition: 0.3s ease;
}

.box-input {
  @apply px-3 bg-white h-10 ring-1 ring-gray-300 hover:ring-blue-500 rounded-md;
}

/* .btn- {
  @apply ml-2 h-10 text-white font-semibold px-4 bg-emerald-500 rounded-lg shadow-sm hover:opacity-80;
} */
</style>
