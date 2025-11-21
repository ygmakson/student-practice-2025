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
    <textarea :id="id" :placeholder="placeholder"/>
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
label {
  font-size: fluid(32, 20);
  font-weight: 500;
}
textarea {
  border: 1px solid var(--gray);
  border-radius: 1rem;
  padding: 1rem;
  width: 100%;
  resize: none;
  height: 15vw;
  @include tablet {
    height: 50vw;
  }
  &:focus {
    border-color: var(--beige);
  }
}
</style>