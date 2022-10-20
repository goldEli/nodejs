<script setup lang="ts">
import { onMounted } from "vue";
import router from "../router";
defineProps<{
  msg: string;
}>();
const emit = defineEmits(["getDataFromSon"]);

onMounted(() => {
  emit("getDataFromSon", "1111");
});

const goto = () => {
  router.push({
    path: "/",
    params: {
      id: "123",
    },
  });
};
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <button @click="goto">跳转到首页</button>
  </div>
</template>
