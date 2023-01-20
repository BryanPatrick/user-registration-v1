<template>
  <input :value="data" @input="updateData($event.target.value)" />
</template>

<script>
export default {
  name: "BaseInput",
  props: ["data"],
  methods: {
    updateData(eventBody) {
      this.$emit("input", eventBody);
    },
  },
};
</script>

<style></style>
