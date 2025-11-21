<script setup>

import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
import HeroPic from "@/assets/images/hero/hero-catalogue.jpg"
import Hero from "@/layouts/Hero.vue";
import CatalogueList from "@/layouts/СatalogueList.vue"

</script>

<template>
  <Header />
  <Hero title="Каталог" :pathImage="HeroPic"/>
  <CatalogueList />
  <Footer />
</template>

<style scoped lang="scss">

</style>