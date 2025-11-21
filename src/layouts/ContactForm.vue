<script setup>
import Phone from '@/assets/images/icons/phone.svg'
import Mail from '@/assets/images/icons/mail.svg'
import Zen from '@/assets/images/icons/zen.svg'
import Vk from '@/assets/images/icons/vk.svg'
import Tg from '@/assets/images/icons/tg.svg'
import Input from "@/components/Input.vue";
import Textarea from "@/components/Textarea.vue";
import Button from "@/components/Button.vue";

</script>

<template>
  <section class="contact">
    <div class="contact__inner container">
      <div class="contact__left">
        <h2>Связаться с нами</h2>
        <div class="contact__left-item"><Phone class="contact__icon" /><h4>Телефон: +7 914 421 57 63</h4></div>
        <div class="contact__left-item"><Mail class="contact__icon" /><h4>Почта: abc@monochrome.com</h4></div>
        <div class="contact__left-item">
            <div class="contact__list">
              <router-link to="#"><Zen class="contact__icon zen"/></router-link>
              <router-link to="#"><Vk class="contact__icon vk"/></router-link>
              <router-link to="#"><Tg class="contact__icon tg"/></router-link>
            </div>
            <h4>Социальные сети</h4>
        </div>
      </div>
      <form action="#" class="contact__right">
        <div class="contact__right-top">
          <Input label="Имя" id="name" placeholder="Введите имя" />
          <Input label="Электронная почта" id="mail" placeholder="Введите почту" />
        </div>
        <Textarea id="message" label="Сообщение" placeholder="Введите сообщение"/>
        <Button class="contact__right-btn">Отправить</Button>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
.contact {
  margin-top: 3rem;
  &__inner {
    display: flex;
    gap: 2rem;
    align-items: center;
    @include tablet {
      flex-direction: column;
    }
  }
  &__left {
    &-society {
      &-list {
        display: flex;
        gap: 2rem;
      }
    }

    display: flex;
    flex-direction: column;
    gap: 1rem;

  }
  &__list {
    display: flex;
    gap: 1rem;
  }
  &__icon {
    width: fluid(65, 39);
    fill: var(--black);
    &:not(:first-child) {
      width: fluid(70, 40);
    }
  }
  &__right {

    width: 50vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @include tablet {
      width: 100%;
      align-items: center;
    }
    &-top {
      display: flex;
      gap: 1rem;
      width: 100%;
    }
    &-btn {
      color: var(--black);
    }
  }
}

.zen {
  transition: all .2s;
  @include hover {
    fill: var(--beige);
  }
}

.vk {
  transition: all .2s;
  @include hover {
    fill: #3f8cff;
  }
}

.tg {
  transition: all .2s;
  @include hover {
    fill: #3fccff;
  }
}

</style>