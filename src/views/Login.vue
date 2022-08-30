<script setup lang="ts">
import router from "@/router/route";
import { ref } from "vue";

const pin = ref<string>("");

const checkLogin = () => {
  if (pin.value.length === 6) {
    if (pin.value === "555555") {
      //   store.dispatch("login", pin);
      router.push({ path: "manages/home" });
    } else {
      alert("PIN ไม่ถูกต้อง!");
      pin.value = "";
    }
  }
};

const enterPIN = (num: string) => {
  pin.value += num;
  checkLogin();
};
</script>

<template>
  <!-- component -->
  <section class="flex justify-center items-center h-screen bg-gray-100">
    <div class="max-w-md w-full bg-white rounded-lg shadow-sm p-6 space-y-4">
      <div class="mb-4">
        <p class="text-gray-600 text-3xl font-bold text-center">
          เข้าสู่ระบบจัดการร้านอาหาร
        </p>
      </div>
      <div class="text-center">
        <input
          v-model="pin"
          @input="checkLogin"
          class="w-9/12 py-2 text-center text-2xl bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
          type="password"
          placeholder="กรอกเลข PIN"
        />
      </div>
      <div class="flex flex-wrap justify-center gap-5">
        <span v-for="i in 9" :key="i">
          <button @click="enterPIN(i.toString())" class="btn-number">
            {{ i }}
          </button>
        </span>
        <button @click="enterPIN('0')" class="btn-number">0</button>
      </div>
    </div>
  </section>
</template>
