<script setup>

import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
import Hero from "@/layouts/Hero.vue";
import HeroPic from "@/assets/images/hero/hero-about.jpg"
import AboutSection from "@/layouts/AboutSection.vue";
import Map from "@/layouts/Map.vue";
import Team from "@/layouts/Team.vue";
</script>

<template>
  <Header />
  <Hero title="О нас" :pathImage="HeroPic"/>
  <AboutSection />
  <Map />
  <Team />
  <Footer />
</template>

<style scoped lang="scss">

</style>