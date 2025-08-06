<template>
  <div>
    <AppNavbar :isDarkMode="isDarkMode" @toggle-dark="toggleDarkMode" />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from './Navbar.vue';
export default {
  name: 'AppLayout',
  components: { AppNavbar },
  data() {
    return {
      isDarkMode: false
    }
  },
  watch: {
    isDarkMode(val) {
      document.body.classList.toggle('dark-mode', val);
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
}
</script>