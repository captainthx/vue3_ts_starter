<script setup lang="ts">
import { computed, watchEffect, ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { COLUMNS, DATA } from '../Types';

const props = defineProps({
  title: {
    type: String,
    default: 'DataTable'
  },
  searchplaceholder: {
    type: String,
    default: 'ค้นหา'
  },
  columns: {
    type: Array<COLUMNS>,
    required: true
  },
  data: {
    type: Array<any>,
    required: true
  },
  options: {
    type: Array<String>,
    required: false
  }
});

const page = ref<number>(1);
const perPage = ref<number>(5);
const pages = reactive<Array<any>>([]);
const searchText = ref<string>('');
const selected = ref<string>('เลือกหมวดหมู่');
// let filterData = reactive<DATA[]>([]);

const route = useRoute();
const params = ref<any>(route.query.selected);

// calculte page
const setPage = () => {
  let numberOfPages: number = Math.ceil(props.data.length / perPage.value);
  for (let index: number = 1; index <= numberOfPages; index++) {
    pages.push(index);
  }
};

// function filter and paginate
const dataTable = computed(() => {
  let newPage: number = page.value;
  let newPerPage: number = perPage.value;
  let from: number = (newPage * newPerPage) - newPerPage;
  let to: number = (newPerPage * newPage);

    if (searchText.value.length) {
        return props.data.filter((e) => e.name.includes(searchText.value));
    } else if (selected.value.toString() != 'เลือกหมวดหมู่') {
        return props.data.filter((e) => e.category.includes(selected.value));
    } else {
        return props.data.slice(from, to);
    }
});

onMounted(() => {
  if (params.value) {
    selected.value = params.value;
  }
});

watchEffect(() => {
  setPage();
});
</script>

<template>
  <div class="w-full">
    <div class="bg-white shadow-md rounded">
      <div>
        <div class="float-left mt-5 ml-5">
          <span
            class="shadow-md shadow-red-200 rounded-md text-xl font-bold p-2 border-2 border-red-500 bg-opacity-5 bg-black"
            >{{ props.title }}</span
          >
        </div>
        <div class="float-right my-2 mr-5">
          <div class="flex">
            <div class="px-3 py-1 bg-white shadow-md rounded-md">
              <select
                v-show="props.options"
                v-model="selected"
                class="bg-gray-200 border-none rounded-md focus:ring-0 mr-5"
              >
                <option>{{ selected }}</option>
                <option value="ทั้งหมด">ทั้งหมด</option>
                <option v-for="i in props.options" :value="i">{{ i }}</option>
              </select>
              <div class="search-input">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class="-mt-1 inline-block"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                  />
                </svg>
                <input
                  v-model="searchText"
                  type="text"
                  :placeholder="props.searchplaceholder"
                  class="border-0 focus:ring-0"
                />
                <svg
                  @click="searchText = ''"
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
              </div>
            </div>
            <div class="inline-block mt-1">
              <span class="mx-5">|</span>
              <button
                class="bg-white hover:text-black hover:bg-blue-200 text-gray-700 font-semibold py-2 px-4 border-2 border-blue-500 rounded-lg shadow-sm mr-2"
              >
                เพิ่ม
              </button>
            </div>
          </div>
        </div>
      </div>
      <table class="min-w-max w-full table-auto">
        <thead>
          <tr
            class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
          >
            <th v-for="column in props.columns" class="py-3 px-6 text-center">
              <span>{{ column.title }}</span>
            </th>
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light">
          <tr
            v-if="dataTable.length > 0"
            v-for="list in dataTable"
            :key="list.id"
            class="border-b border-gray-200 hover:bg-gray-100"
          >
            <td class="py-3 px-6 text-left whitespace-nowrap">
              <div class="flex items-center">
                <div class="mr-2">
                  <img
                    :src="
                      list.img ||
                      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
                    "
                    alt=""
                    class="w-20 h-20 rounded-md ring-1 ring-red-700"
                  />
                </div>
                <span class="font-medium mr-1">{{
                  list.name || list + " | "
                }}</span>
                <router-link
                  class="text-blue-500"
                  v-show="!list.name"
                  :to="`/manages/foods?selected=${list}`"
                >
                  <svg
                    class="hover:fill-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                    />
                  </svg>
                </router-link>
              </div>
            </td>
            <td v-show="list.level" class="py-3 px-6 text-left">
              <div class="flex items-center">
                <span>{{ list.level }}</span>
              </div>
            </td>
            <td v-show="list.category" class="py-3 px-6 text-left">
              <div class="flex items-center">
                <span>{{ list.category }}</span>
              </div>
            </td>
            <td v-show="list.price" class="py-3 px-6 text-left">
              <div class="flex items-center">
                <span>฿{{ list.price }}</span>
              </div>
            </td>
            <td v-show="list.qty" class="py-3 px-6 text-center">
              <div class="flex items-center justify-center">
                <span>{{ list.qty }}</span>
              </div>
            </td>
            <td class="py-3 px-6 text-center"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
