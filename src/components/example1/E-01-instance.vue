<template>
  <div>Hello, {{ message }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "E01Instance",
  data() {
    return {
      message: "Vue!",
    };
  },
});
</script>

<style scoped>
div {
  color: blue;
}
</style>
