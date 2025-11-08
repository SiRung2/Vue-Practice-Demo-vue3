<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "E03Binding",
  data() {
    return {
      message: "Hello Vue",
    };
  },
});
</script>
