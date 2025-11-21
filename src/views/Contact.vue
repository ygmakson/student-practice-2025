<script setup>

import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
import HeroPic from "@/assets/images/hero/hero-contact.jpg"
import Hero from "@/layouts/Hero.vue";
import ContactForm from "@/layouts/ContactForm.vue";

</script>

<template>
  <Header />
  <Hero title="Контакты" :pathImage="HeroPic"/>
  <ContactForm />
  <Footer />
</template>

<style scoped lang="scss">

</style>