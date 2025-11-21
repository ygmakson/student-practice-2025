<script setup>

</script>

<template>
  <div class="map container">
    <h2>Мы на карте</h2>
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Adb0e5a888670ac40d232a8e76265ed7db89dc8efdc51cafa7b7e48d9af2bca11&amp;source=constructor" width="100%" height="600" frameborder="0"></iframe>
    <p>г. Нижний Новгород, Московское шоссе, 1</p>
  </div>

</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
  .map  {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;
    p {
      opacity: 50%;
    }
    iframe {
      @include mobile {
        height: 80vw;
      }
    }
  }
</style>