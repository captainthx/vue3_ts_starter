<script setup lang="ts">
import IconLoading from "../IconLoading.vue";
const { columns } = defineProps<{
  dataCount: number;
  columns: Array<any>;
  loading: boolean;
}>();
</script>

<template>
  <table class="w-full table-auto border-x border-gray-200">
    <thead>
      <tr class="bg-gray-200 text-red-600 text-sm">
        <th :colspan="columns.length">ข้อมูลมีทั้งหมด {{ dataCount }} รายการ</th>
      </tr>
    </thead>
  </table>
  <table id="table" class="w-full table-auto border-x border-gray-200">
    <thead>
      <tr class="text-gray-500 text-sm">
        <th
          v-for="column in columns"
          :class="`text-${column.align ? column.align : 'center'} font-bold`"
        >
          {{ column.name }}
        </th>
      </tr>
    </thead>
    <tbody class="text-gray-600 text-sm font-light">
      <tr v-if="loading">
        <td :colspan="columns.length" class="text-center text-lg text-blue-700 py-5">
          <IconLoading />
        </td>
      </tr>
      <slot v-else-if="dataCount"></slot>
      <tr v-else>
        <td :colspan="columns.length" class="text-center text-lg text-red-600 py-5">
          ไม่พบข้อมูลที่คุณค้นหา
        </td>
      </tr>
    </tbody>
  </table>
</template>
