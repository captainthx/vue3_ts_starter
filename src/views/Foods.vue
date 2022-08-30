<script setup lang="ts">
import TableWrapper from "@/components/Table/TableWrapper.vue";
import TableHeaders from "@/components/Table/TableHeaders.vue";
import TableBody from "@/components/Table/TableBody.vue";
import TablePagination from "@/components/Table/TablePagination.vue";

import { MoneyFormat, NumFormat } from "@/core/plugins/TextFormat";
import { EXCEL } from "@/types";
import { onMounted, reactive, ref } from "vue";
import { foods } from "@/Data";

const id = ref<number>(0);
const emit = defineEmits(["openModal"]);
const page = ref<number>(1);
const pageCount = ref<number>(1);

const state = reactive<any>({
  data: [],
  loading: true,
  error: false,
});

const table = reactive({
  title: "ตารางอาหาร",
  columns: [
    { name: "รหัส" },
    { name: "ชื่อ" },
    { name: "หมวดหมู่" },
    { name: "ราคา" },
    { name: "จำนวน" },
    { name: "สถานะ" },
  ],
  date: true,
  modal: true,
});

const excel = reactive<EXCEL>({
  export: true,
  data: [],
  dowloadLoading: false,
});

const openModal = async () => {
  emit("openModal", id.value);
  id.value = 0;
};

const dowloadExcel = () => {
  excel.dowloadLoading = true;
  excel.data = [];
  import("@/core/plugins/Export2Excel")
    .then((Export2Excel) => {
      state.data.forEach((val: any) => {
        excel.data.push([val.id, val.name, val.price, val.qty]);
      });
      Export2Excel.default(table.title, table.columns, excel.data);
    })
    .finally(() => {
      excel.dowloadLoading = false;
    });
};

const changePage = () => {
  console.log("changePage");
};

onMounted(() => {
  state.data = foods;
  state.loading = false;
});
</script>

<template>
  <!-- Table -->
  <TableWrapper>
    <TableHeaders
      :title="table.title"
      :date="table.date"
      :modal="table.modal"
      :export="excel.export"
      :exportLoading="excel.dowloadLoading"
      :loading="state.loading"
      @openModal="openModal"
      @export="dowloadExcel"
    />
    <TableBody
      :dataCount="state.data.length"
      :columns="table.columns"
      :loading="state.loading"
    >
      <tr
        v-for="list in state.data"
        :key="list.id"
        class="border-b border-gray-200 hover:bg-gray-100"
      >
        <td>
          <div class="flex items-center justify-center">
            <span>{{ list.id }}</span>
          </div>
        </td>
        <td>
          <div class="flex items-center">
            <span class="font-medium mr-1">{{ list.name }}</span>
          </div>
        </td>
        <td>
          <div class="flex items-center justify-end">
            <span>{{ list.category }}</span>
          </div>
        </td>
        <td>
          <div class="flex items-center justify-end">
            <span>{{ MoneyFormat(list.price) }}</span>
          </div>
        </td>
        <td>
          <div class="flex items-center justify-end">
            <span>{{ NumFormat(list.qty) }}</span>
          </div>
        </td>
        <td>
          <div class="flex items-center justify-end">
            <span>{{ list.isActive ? "เปิด" : "ปิด" }}</span>
          </div>
        </td>
      </tr>
    </TableBody>
    <TablePagination :pageCount="pageCount" @changePage="changePage" />
  </TableWrapper>
</template>
