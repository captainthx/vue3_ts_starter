<script setup lang="ts">
import { useRoute } from "vue-router";

const params = useRoute();

function print() {
  let content_innerhtml: any = document.getElementById("print")?.innerHTML;
  let document_print: any = window.open(
    "https://www.google.com",
    "_blank",
    "toolbar=no,lcation=no,directories=no,menubar=no,scrollbars=no"
  );
  document_print.document.open();
  document_print.document.close();
  document_print.document.write(
    '<body style="font-family:Calibri(body);  font-size:16px;" onLoad="self.print();self.close();" >'
  );
  document_print.document.write(content_innerhtml);
  document_print.document.write("</body></html>");
  document_print.document.title = "ออกรายงาน";
  document_print.print();
  document_print.close();
}
</script>

<template>
  <div class="fadeInRight bg-white py-1 px-3">
    <div class="inline-flex">
      <router-link to="?q=การเงิน">
        <button
          class="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 mt-2 border border-gray-300 rounded-lg shadow-sm mr-2"
        >
          การเงิน
        </button>
      </router-link>
      <router-link to="?q=สินค้า">
        <button
          class="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 mt-2 border border-gray-300 rounded-lg shadow-sm"
        >
          สินค้า
        </button>
      </router-link>
    </div>
    <h1
      class="p-2 w-full text-center text-xl font-bold bg-pink-400 text-white my-2 rounded-lg shadow-sm"
    >
      ออกรายงาน [{{ params.query.q }}]
    </h1>
    <div class="">
      <div class="inline-flex">
        <div class="inline-grid">
          <label>วันที่เริ่มต้น</label>
          <input type="date" class="rounded-lg" />
        </div>
        <div class="inline-grid mx-3">
          <label for=""></label>
          <span class="my-auto">ถึง</span>
        </div>
        <div class="inline-grid">
          <label>วันที่สิ้นสุด</label>
          <input type="date" class="rounded-lg" />
        </div>
        <div class="inline-grid mx-3">
          <label for="">เลือกประเภทการจ่ายเงิน</label>
          <select class="rounded-lg">
            <option>เงินสด</option>
            <option>พร้อมเพย์</option>
          </select>
        </div>
      </div>
      <div class="float-right mt-3">
        <button
          @click="print"
          class="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 mt-2 border border-gray-300 rounded-lg shadow-sm mr-2"
        >
          <svg
            class="inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M6 19H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm0-2v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1h2V9H4v8h2zM8 4v3h8V4H8zm0 13v3h8v-3H8zm-3-7h3v2H5v-2z"
            />
          </svg>
          พิมพ์
        </button>
      </div>
      <div id="print">
        <table class="mt-5" width="100%" border="1px solid" cellspacing="0">
          <thead>
            <th v-for="i in 5">Title-{{ i }}</th>
          </thead>
          <tbody>
            <tr v-for="l in 10">
              <td v-for="x in 5">Content-{{ x }}</td>
            </tr>
            <tr class="font-bold">
              <td style="font: bold">รวมทั้งหมด</td>
              <td colspan="4" class="text-center">
                <span style="color: red; font: bold">฿999,999.00</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
table,
td,
th {
  border: 1px solid;
  padding: 10px;
}
</style>
