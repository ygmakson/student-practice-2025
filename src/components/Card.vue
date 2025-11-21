<script setup>

import Favorite from '@/assets/images/icons/favorite.svg'

defineProps({
  img: String,
  name: String,
  price: String,
  status1: Boolean,
  status2: Boolean,
  status3: Boolean,
  status4: Boolean,
  status5: Boolean,
})
</script>

<template>
  <router-link to="#">
    <div class="card">
      <img :src="img" alt="#">
      <div class="card__info">
        <div class="card__info-name">{{name}}</div>
        <div class="card__info-price">{{price}} руб.</div>
        <div class="card__info-sizes">
          <span :class="{not: status1}">XS</span>
          <span :class="{not: status2}">S</span>
          <span :class="{not: status3}">M</span>
          <span :class="{not: status4}">L</span>
          <span :class="{not: status5}">XL</span>
        </div>
      </div>
      <button class="card__favorite" ><Favorite/></button>

    </div>
  </router-link>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
.card {
  width: fluid(300, 170);
  position: relative;
  &__info {

    padding-block: .5rem;
    display: flex;
    flex-direction: column;
    gap: .2rem;
    height: fluid(80, 100);

    &-sizes {
      display: flex;
      gap: .2rem;
      margin-top: auto;
    }
  }
  @include hover {
    &::after {
      transform: scaleX(1);
    }
  }
  &::after {
    transition: all .2s;
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: var(--black);
    transform: scaleX(0);
  }

  &__favorite {
    position: absolute;
    top: 10px;
    right: 10px;
    fill: #000000;
    opacity: 0.3;
    transition: all .2s;
    @include hover {
      opacity: 1;
      fill: var(--beige);
    }
  }
}

.not {
  opacity: 50%;
}

</style>