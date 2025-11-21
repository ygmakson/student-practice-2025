<script setup lang="ts">
defineProps({
  placeholder: String,
  id: String,
  label: String,
})
</script>

<template>
  <div>
    <label :for="id">{{label}}</label>
    <input type="text" :id="id" required :placeholder="placeholder">
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
div {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  width: 100%;
}
input {
  border: 1px solid var(--gray);
  border-radius: 1rem;
  padding: 1rem;
  width: 100%;
  &:focus {
    border-color: var(--beige);
  }
}
label {
  font-size: fluid(32, 16);
  font-weight: 500;
}
</style>