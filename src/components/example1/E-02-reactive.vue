<template>
  <div>{{ fullName }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "E02Reactive",
  data() {
    return {
      firstName: "Kyungsu",
      lastName: "Lee",
    };
  },
  mounted() {
    setTimeout(() => {
      this.firstName = "KSL";
    }, 2000);
  },
  computed: {
    fullName(): string {
      return this.firstName + " " + this.lastName;
    },
  },
});
</script>
