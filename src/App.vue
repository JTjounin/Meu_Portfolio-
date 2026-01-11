<template>
  <Navbar @toggle-theme="toggleTheme" :theme="theme" />
  <Hero />
  <Skills />
  <Projects />
  <About />
  <Contact />
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './sections/Hero.vue'
import Skills from './sections/Skills.vue'
import Projects from './sections/Projects.vue'
import About from './sections/About.vue'
import Contact from './sections/Contact.vue'
import { onMounted, nextTick } from 'vue'
import { initScrollReveal } from './utils/scrollReveal'

const theme = ref('dark')

watchEffect(() => {
  document.body.className = theme.value
})

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

onMounted(async () => {
  await nextTick()
  initScrollReveal()
})
</script>
