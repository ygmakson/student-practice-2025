<script setup>
import Img from '@/assets/images/about/about.jpg'
</script>

<template>
<section class="about">
  <div class="about__top container">
    <h2>История</h2>
    <p>«Монохром» появился как идея создать одежду, в которой нет лишнего. Бренд вырос из стремления вернуть моду к её чистой форме: качественные ткани, продуманные силуэты и универсальные оттенки, которые легко вписываются в жизнь. Начав с небольшой коллекции базовых вещей, «Монохром» быстро нашёл свою аудиторию — тех, кто ценит простоту, эстетику минимализма и одежду без визуального шума. С развитием бренда выросли коллекции, технологии и команда, но философия осталась прежней: стиль должен быть честным, практичным и долговечным.</p>
  </div>
  <img :src="Img" alt="#">
</section>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
.about {
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  @include tablet {
    flex-direction: column;
  }

  &__top {
    margin-left: 5vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  img {
    width: 60vw;
    @include tablet {
      width: 100vw;
    }

  }
}
</style>