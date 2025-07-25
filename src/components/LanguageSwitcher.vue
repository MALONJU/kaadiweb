<template>
    <div class="ms-3">
      <select v-model="currentLang" @change="changeLanguage" class="form-select form-select-sm">
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentLang: this.$i18n.locale
      }
    },
    methods: {
      changeLanguage() {
        this.$i18n.locale = this.currentLang
      }
    }
  }
  </script>
  