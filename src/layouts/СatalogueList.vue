<script setup>

import Card from "@/components/Card.vue";
import {ref} from "vue";
import Filter from '@/assets/images/icons/filter.svg'

const products = ref([
  {
    img: new URL('@/assets/images/cards/card1.jpg', import.meta.url).href,
    name: "Пуховик удлиненный",
    price: "12 500",
    status1: true,
    status2: false,
    status3: true,
    status4: true,
    status5: false
  },
  {
    img: new URL('@/assets/images/cards/card2.jpg', import.meta.url).href,
    name: "Джинсы прямые",
    price: "8 900",
    status1: true,
    status2: true,
    status3: false,
    status4: true,
    status5: true
  },
  {
    img: new URL('@/assets/images/cards/card3.jpg', import.meta.url).href,
    name: "Кофта на молнии",
    price: "15 700",
    status1: false,
    status2: true,
    status3: true,
    status4: false,
    status5: true
  },
  {
    img: new URL('@/assets/images/cards/card4.jpg', import.meta.url).href,
    name: "Кардиган шерстяной",
    price: "6 300",
    status1: true,
    status2: false,
    status3: true,
    status4: true,
    status5: false
  },
  {
    img: new URL('@/assets/images/cards/card5.jpg', import.meta.url).href,
    name: "Лонгслив поло",
    price: "9 800",
    status1: true,
    status2: true,
    status3: false,
    status4: true,
    status5: true
  },
  {
    img: new URL('@/assets/images/cards/card6.jpg', import.meta.url).href,
    name: "Рубашка вельветовая",
    price: "22 400",
    status1: false,
    status2: true,
    status3: true,
    status4: false,
    status5: false
  },
  {
    img: new URL('@/assets/images/cards/card7.jpg', import.meta.url).href,
    name: "Кеды замшевые",
    price: "11 200",
    status1: true,
    status2: false,
    status3: true,
    status4: true,
    status5: true
  },
  {
    img: new URL('@/assets/images/cards/card8.jpg', import.meta.url).href,
    name: "Свитшот классический",
    price: "5 600",
    status1: false,
    status2: true,
    status3: false,
    status4: true,
    status5: false
  },
  {
    img: new URL('@/assets/images/cards/card9.jpg', import.meta.url).href,
    name: "Кофта на молнии",
    price: "18 900",
    status1: true,
    status2: true,
    status3: true,
    status4: false,
    status5: true
  },
  {
    img: new URL('@/assets/images/cards/card10.jpg', import.meta.url).href,
    name: "Рубашка хлопковая",
    price: "7 400",
    status1: false,
    status2: false,
    status3: true,
    status4: true,
    status5: false
  },
  {
    img: new URL('@/assets/images/cards/card11.jpg', import.meta.url).href,
    name: "Трикотажный жилет",
    price: "4 800",
    status1: true,
    status2: true,
    status3: false,
    status4: false,
    status5: true
  },
  {
    img: new URL('@/assets/images/cards/card12.jpg', import.meta.url).href,
    name: "Кардиган хлопковый",
    price: "14 300",
    status1: true,
    status2: false,
    status3: true,
    status4: true,
    status5: false
  },
  {
    img: new URL('@/assets/images/cards/card13.jpg', import.meta.url).href,
    name: "Рубашка классическая",
    price: "5 900",
    status1: false,
    status2: true,
    status3: true,
    status4: false,
    status5: true
  },
  {
    img: new URL('@/assets/images/cards/card14.jpg', import.meta.url).href,
    name: "Рюкзак",
    price: "13 600",
    status1: true,
    status2: true,
    status3: false,
    status4: true,
    status5: false
  },
  {
    img: new URL('@/assets/images/cards/card15.jpg', import.meta.url).href,
    name: "Джинсы классические",
    price: "8 100",
    status1: false,
    status2: false,
    status3: true,
    status4: true,
    status5: true
  },
  {
    img: new URL('@/assets/images/cards/card16.jpg', import.meta.url).href,
    name: "Худи хлопковое",
    price: "10 700",
    status1: true,
    status2: true,
    status3: true,
    status4: false,
    status5: true
  }
]);

const activePage = ref(1)
</script>

<template>
<section class="catalogue">
  <div class="catalogue__inner container">
    <div class="catalogue__head">
      <h2 class="catalogue__title">Каталог</h2>
      <button class="catalogue__filter"><Filter />Фильтр</button>
    </div>
    <div class="catalogue__product-list">
        <Card v-for="item in products"
              :img="item.img"
              :name="item.name"
              :price="item.price"
              :status1="item.status1"
              :status2="item.status2"
              :status3="item.status3"
              :status4="item.status4"
              :status5="item.status5"
        />
    </div>
    <div class="catalogue__pagination">
      <button class="catalogue__pagination-item" @click="activePage = 1" :class="{active: activePage === 1}">1</button>
      <button class="catalogue__pagination-item" @click="activePage = 2" :class="{active: activePage === 2}">2</button>
      <button class="catalogue__pagination-item" @click="activePage = 3" :class="{active: activePage === 3}">3</button>
      <button class="catalogue__pagination-item" @click="activePage = 4" :class="{active: activePage === 4}">4</button>
      <button class="catalogue__pagination-item" @click="activePage = 5" :class="{active: activePage === 5}">5</button>
    </div>
  </div>

</section>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
.catalogue {
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 3rem;
  }
  &__head {
    display: flex;
    justify-content: space-between;
  }
  &__filter {
    color: var(--black);
    opacity: 50%;
    font-size: fluid(24, 16);
    fill: var(--black);
    stroke: var(--black);
    display: flex;
    align-items: center;
    transition: all .2s;
    @include hover {
      color: var(--beige);
      stroke: var(--beige);
    }
  }
  &__product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
  }
  &__pagination {
    display: flex;
    justify-content: center;
    gap: fluid(16, 8);
    &-item {
      transition: all .2s;
      @include square(fluid(40, 30));
      background-color: var(--beige-lite);
      border-radius: .5rem;
      color: var(--black);
    }
  }

}

.active {
  background-color: var(--beige);
}
</style>