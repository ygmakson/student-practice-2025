<script setup>
import {ref} from "vue";

const data = ref([
  {name: 'Анна Петрова', rang: 'Основатель и идейный вдохновитель', img: new URL('@/assets/images/team/team1.jpg', import.meta.url).href},
  {name: 'Марк Семёнов', rang: 'Главный дизайнер', img: new URL('@/assets/images/team/team2.jpg', import.meta.url).href},
  {name: 'Ольга Захарова', rang: 'Руководитель отдела качества и закупок', img: new URL('@/assets/images/team/team3.jpg', import.meta.url).href},
  {name: 'Игорь Дмитриев', rang: 'Руководитель клиентского сервиса', img: new URL('@/assets/images/team/team4.jpg', import.meta.url).href},
])
</script>

<template>
<section class="team container">
  <h2>Наша команда</h2>
  <div class="team__list">
    <div v-for="user in data" class="team__card">
      <img :src="user.img" alt="#">
      <h4>{{user.name}}</h4>
      <p>{{user.rang}}</p>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;

  &__list {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;

  }

  &__card {
    width: fluid(300, 200);
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: center;
    text-align: center;
  }
}
</style>