<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import Alert from "@/components/Alert.vue";
import Modal from "@/components/Modal.vue";

interface TABLES {
  id: number;
  number: number;
  count: number;
  isActive: boolean;
}

const tables = reactive<TABLES[]>([]);

const empty = ref<boolean | null>(null);
const modal = ref<boolean>(false);
const number = ref<number>(0);
const button = reactive({
  qrcode: false,
  move: false,
  detail: false,
  payment: false,
  isActive: false,
});
const alert = reactive({
  status: false,
  text: "",
  code: "",
});

const closeTable = (n: number) => {
  if (confirm("คุณแน่ใจที่จะปิดโต๊ะนี้ใช่ไหม")) {
    const x = tables.find((e) => e.number === n);
    if (x) {
      x.isActive = false;
    }
    modal.value = false;
  }
};

const openModal = (id: number) => {
  const x = tables.find((e) => e.id === id);
  if (x) {
    number.value = x.number;
    button.isActive = x.isActive;
  }
  modal.value = true;
};

const closeModal = () => {
  number.value = 0;
  modal.value = false;
};

const cancelModal = () => {
  closeModal();
};

const saveModal = (id: number) => {
  const x = tables.find((e) => e.id === id);
  if (x) {
    x.isActive = true;
    number.value = x.number;
  }
  closeModal();
  alert.status = true;
  alert.code = "success";
  alert.text = "บันทึกข้อมูลเรียบร้อย";
  setTimeout(() => {
    alert.status = false;
  }, 10000);
};

onMounted(() => {
  for (let i = 1; i <= 50; i++) {
    let data;
    if (i % 2 == 0) {
      data = { id: i, number: i, count: 0, isActive: false };
    } else {
      data = { id: i, number: i, count: 5, isActive: true };
    }
    tables.push(data);
  }
});
</script>
<template>
  <!-- menu on top -->
  <div>
    <div class="flex-1 mb-2">
      <button @click="empty = false" class="btn mr-2">ว่าง</button
      ><button @click="empty = true" class="btn mr-2">ไม่ว่าง</button>
      <button @click="empty = null" class="btn">ทั้งหมด</button>
    </div>
  </div>

  <!-- grid tables-->
  <div class="grid grid-cols-7 gap-3 fadeInRight">
    <span
      v-for="table in empty != null ? tables.filter((e) => e.isActive == empty) : tables"
      @click="openModal(table.id)"
      class="text-2xl text-center bg-gray-400 border-2 py-12 cursor-pointer hover:bg-gray-200 hover:border-[#E85242] transition-all duration-150 ease-in"
      :class="{ 'bg-teal-900 text-white': table.isActive }"
    >
      <h1 class="w-ful" :class="{ 'bg-black py-2 bg-opacity-50': table.isActive }">
        โต๊ะที่ {{ table.number }} <span v-if="!table.isActive">(ว่าง)</span>
      </h1>
    </span>
  </div>

  <!-- Modal -->
  <Modal v-if="modal" :title="`โต๊ะที่ ${number}`" @close-modal="modal = false" />

  <!-- Alert -->
  <Alert v-if="alert.status" :text="alert.text" :code="alert.code" />
</template>
