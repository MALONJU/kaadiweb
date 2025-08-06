<template>
  <nav :class="['navbar', 'navbar-expand-lg', isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light', 'sticky-top', 'shadow-sm']">
    <div class="container">
      <a class="navbar-brand fw-bold text-primary" href="#">Shoplink</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><router-link class="nav-link" to="/">{{ $t('nav_home') }}</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/discover">{{ $t('nav_story') }}</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/order">{{ $t('nav_packs') }}</router-link></li>
          <li class="nav-item"><a class="nav-link" href="#science">{{ $t('nav_science') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="#features">{{ $t('nav_features') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="#design">{{ $t('nav_design') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="#benefits">{{ $t('nav_benefits') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">{{ $t('nav_contact') }}</a></li>
        </ul>
        <!-- Dark mode toggle -->
        <button @click="$emit('toggle-dark')" class="btn btn-sm btn-outline-secondary ms-3">
          {{ isDarkMode ? $t('light_mode') : $t('dark_mode') }}
        </button>
        <LanguageSwitcher />
      </div>
    </div>
  </nav>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue';
export default {
  name: 'AppNavbar',
  props: {
    isDarkMode: Boolean
  },
  emits: ['toggle-dark'],
  components: {
    LanguageSwitcher
  }
}
</script>